export default function Export() {
  const exportToCsv = async (data, filename) => {
    const titleKeys = Object.keys(data[0]).slice(1)
    const refinedData = []
    refinedData.push(titleKeys)

    data.forEach((item) => {
      const values = Object.values(item).slice(1)
      refinedData.push(values)
    })

    let csvContent = ''
    refinedData.forEach((row) => {
      csvContent += row.join(',') + '\n'
    })

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', objUrl)
    link.setAttribute('download', filename)
    link.click()

    URL.revokeObjectURL(objUrl)
  }

  return { exportToCsv }
}
