import React from 'react'
import { Icon } from "@material-ui/core";
import { CustomIconEnum } from '../Enums/custome-icons.enum';
import SvgIcon from '@mui/material/SvgIcon';

export default function ExportIcon(SvgIcon){
console.log("SvgIcon", SvgIcon);
let reactIcon = `../../assets/icons/${ CustomIconEnum[SvgIcon.SvgIcon]}.svg`


const svgUrl = window.URL.createObjectURL(reactIcon)
console.log(svgUrl)
return(
    // <img src={require(reactIcon)} alt={SvgIcon.SvgIcon} />
    <SvgIcon>
       
    </SvgIcon>
)
}