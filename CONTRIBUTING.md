# 添砖加瓦

## 代码风格

### CSS

示例：

```css
.bx-controls {
  input,
  button {
    display: none;
  }
  .control {
    float: left;
    margin-left: -19px;
  }
}
```

说明：

- 两个空格缩进
- 选择器与区块的开括号 `{` 之间有空格
- 属性与值之间，即 `:` 后头，有个空格
- 多个选择器，在逗号之后换行

错误示例：

```css
// 正确
.bx-controls {
  margin: 0 auto;
}

// 错误
.bx-controls{
    margin:0 auto;
}
```

### HTML

- 两个空格缩进
- UTF-8 编码
- HTML5 页头 `<!doctype html>`
