export default {
  option: (base, { isSelected, isDisabled }) => {
    const styles = base

    styles.fontSize = '14px'
    styles.color = isSelected ? '#fff'
      : isDisabled ? '#666'
      : '#222'

    if (isDisabled) {
      styles.backgroundColor = '#f0f0f0'
    }

    return styles
  },
  indicatorSeparator: () => ({
    display: 'none'
  }),
  menu: (base) => ({
    ...base,
    maxWidth: '200px',
    fontSize: '14px'
  }),
  control: (base) => ({
    ...base,
    maxWidth: '200px',
    fontSize: '14px'
  }),
  container: (base) => ({
    ...base,
    margin: '12px 0'
  })
}
