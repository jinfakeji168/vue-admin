import { ElRadio, ElRadioButton } from 'element-plus'
import { defineComponent } from 'vue'
import ComponentNameEnum from '../comEnum.json'

export const useRenderRadio = () => {
  const renderRadioOptions = (item) => {
    // 如果有别名，就取别名
    const componentProps = item?.componentProps
    const valueAlias = componentProps?.props?.value || 'value'
    const labelAlias = componentProps?.props?.label || 'label'
    const disabledAlias = componentProps?.props?.disabled || 'disabled'
    const Com = (
      item.component === ComponentNameEnum.RADIO_GROUP ? ElRadio : ElRadioButton
    )
    return componentProps?.options?.map((option) => {
      const { ...other } = option
      return (
        <Com
          {...other}
          disabled={option[disabledAlias || 'disabled']}
          label={option[labelAlias || 'label']}
          value={option[valueAlias || 'value']}
        ></Com>
      )
    })
  }

  return {
    renderRadioOptions
  }
}