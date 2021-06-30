import { ModelOfColorTheme } from "@src/model"

const baseColors = {
  highlight: '#D52817',
  white: '#fff',
  whiteLight: '#f2f2f2',
  blackLight: '#404040',
  black: '#0D0D0D',
  blackOpacity: 'rgba(0,0,0,0.5)',
  yelow: '#d9dc11',
  red: '#e51818',
  green: '#11ff00'
}

export const colors:ModelOfColorTheme = {
  background: baseColors.white,
  backgroundSecundary: baseColors.whiteLight,
  backgroundModal: baseColors.blackOpacity,
  elements: baseColors.black,
  elementsSecundary: baseColors.blackLight,
  text: baseColors.black,
  textSecundary: baseColors.blackLight,
  textElements: baseColors.white,
  textElementsSecundary: baseColors.whiteLight,
  textHighlight: baseColors.highlight,
  warn: baseColors.yelow,
  error: baseColors.red,
  success: baseColors.green
}

