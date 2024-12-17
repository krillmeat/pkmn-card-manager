import { useState, useEffect, useMemo } from "react";
import { getNumberOfRows } from "../../card-builder.util";

const ROW_WIDTH = {
  power: {
    STANDARD: 42,
    LONG: 59,
    LONG_SMALL: 69
  },

  attack: {
    STANDARD: 32,
    SHIFT_ONE: 38,
    SHIFT_TWO: 44,
  }
};

export const useEffectModifiers = (effects) => {
  const [modifiers,setModifiers] = useState({});

  const EO = useMemo(()=> effects[0],[effects]);
  const ET = useMemo(()=> effects[1],[effects]);

  useEffect(()=>{
    let _mods = {};

    if(!effects) return;
    if(effects.length === 1){
      let _eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].STANDARD);
      if(_eoRows < 5) return;
      if(EO.cost.length <= 3){
        _eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].SHIFT_ONE);
        if(_eoRows < 5){
          _mods.shiftAttackTextLeftOne = true;
          setModifiers({...modifiers, ..._mods});
          return;
        } else{ 
          if(EO.cost.length <= 2){
            _eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].SHIFT_TWO);
          
            _mods.shiftAttackTextLeftTwo = true;
            setModifiers({...modifiers, ..._mods});
            return;
            
         } else{ 
          _mods.shiftAttackTextLeftOne = true;
          setModifiers({...modifiers, ..._mods});
          return;
        }
        }
      }
    };

    let eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].STANDARD) || 0;
    let etRows = getNumberOfRows(ET.text,ROW_WIDTH[effects[1].type].STANDARD) || 0;
    let totalRows = eoRows + etRows;

    if(totalRows <= 2){
      _mods.expandVerticalSpace = true;
      setModifiers({...modifiers, ..._mods});
      return;
    }

    if(totalRows < 7 && eoRows < 4 && etRows < 4) return; // Nothing else to really improve, move on

    // IF both effects have 3, tighten the space and move on
    if(eoRows === 4 && etRows === 4){
      _mods.tightenVerticalSpace = true;
      setModifiers({...modifiers, ..._mods});
      return;
    }

    if(eoRows > 3){
      if(EO.type === 'power'){
        _mods.powerLong = true;
        eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].LONG);
        totalRows = eoRows + etRows;

        if(eoRows > 3){ // Still greater than 3
          _mods.powerSmall = true;
          eoRows = getNumberOfRows(EO.text,ROW_WIDTH[EO.type].LONG_SMALL);
          totalRows = eoRows + etRows;
        }
      }
    }

    if(etRows > 3 || (totalRows > 6 && etRows >= 3)){
      if(ET.type === 'attack'){
        if((EO.type === 'power' || EO.cost?.length <=3) && ET.cost?.length <=3){
          _mods.shiftAttackTextLeftOne = true;
          etRows = getNumberOfRows(ET.text,ROW_WIDTH[ET.type].SHIFT_ONE);
          totalRows = eoRows + etRows;
        }

        if(etRows > 3){
          // _mods.attackLong = true;
          _mods.attackTwoSmall = true;
        }
      }
    }

    if(totalRows > 5) _mods.tightenVerticalSpace = true;

    setModifiers({...modifiers, ..._mods});

  },[EO,ET])

  return modifiers;
}
