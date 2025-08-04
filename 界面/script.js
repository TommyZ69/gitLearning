const table = document.getElementById('myTable');

// 创建10行5列表格，填入 (行,列) 坐标
for (let i = 1; i <= 10; i++) {
  const row = document.createElement('tr');
  for (let j = 1; j <= 5; j++) {
    const cell = document.createElement('td');
    cell.textContent = `(${i},${j})`;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
