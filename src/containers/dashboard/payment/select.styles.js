module.exports = {
  option: (base, { isSelected }) => ({
    ...base,
    fontSize: '16px',
    color: isSelected ? '#fff': '#222'
  }),
  indicatorSeparator: (base) => ({
    display: 'none'
  }),
  menu: (base) => ({
    ...base,
    maxWidth: '200px'
  }),
  control: (base) => ({
    ...base,
    maxWidth: '200px',
    fontSize: '16px'
  }),
  container: (base) => ({
    ...base,
    margin: '12px 0'
  })
}
