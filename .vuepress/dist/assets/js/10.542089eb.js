(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"python的两种编程方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python的两种编程方式"}},[t._v("#")]),t._v(" python的两种编程方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("交互式：对每个输入语句即时运行结果，适合语法练习")])]),t._v(" "),a("li",[a("p",[t._v("文件式：批量执行一组语句并运行结果，是编程的主要方式")])])]),t._v(" "),a("h2",{attrs:{id:"实例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例1"}},[t._v("#")]),t._v(" 实例1")]),t._v(" "),a("p",[t._v("温度转换")]),t._v(" "),a("p",[t._v("温度刻画的两种不同体系")]),t._v(" "),a("p",[t._v("摄氏度/华氏度")]),t._v(" "),a("p",[t._v("将两个温度值相互转换")]),t._v(" "),a("h4",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),a("p",[t._v("该问题计算部分的理解与确定")]),t._v(" "),a("p",[t._v("-理解1 ：直接将温度值进行转换")]),t._v(" "),a("p",[t._v("-理解2 ： 将温度信息发布的声音或图像形式进行理解和转换")]),t._v(" "),a("p",[t._v("-理解3 ： 监控温度信息发布渠道，实时获取并转换温度值")]),t._v(" "),a("p",[t._v("分析问题：采用理解1")]),t._v(" "),a("p",[t._v("直接将温度值进行转换，转换前后明确温度值的标志")]),t._v(" "),a("p",[t._v("划分边界")]),t._v(" "),a("p",[t._v("输入：带华氏或摄氏标志的温度值")]),t._v(" "),a("p",[t._v("处理：根据温度标志选择适当的温度转换算法")]),t._v(" "),a("p",[t._v("输出： 带摄氏或华氏的温度值")]),t._v(" "),a("p",[t._v("输入输出格式设计")]),t._v(" "),a("p",[t._v("标识放在温度后，F标识华氏度，C表示摄氏度")]),t._v(" "),a("p",[t._v("即，23F标识摄氏23度，47C表示摄氏47度")]),t._v(" "),a("p",[t._v("以上为输入输出的描述与定义")]),t._v(" "),a("p",[t._v("设计算法")]),t._v(" "),a("p",[t._v("根据两者温度定义，利用转换公式")]),t._v(" "),a("p",[t._v("C = (F-32)/1.8")]),t._v(" "),a("p",[t._v("F = C * 1.8 +32")]),t._v(" "),a("p",[t._v("其中，F标识华氏度，C表示摄氏度")]),t._v(" "),a("h4",{attrs:{id:"程序编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序编写"}},[t._v("#")]),t._v(" 程序编写")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#TempConcert.py")]),t._v("\nTempStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入带有符号的温度值："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"转换后的温度是{:.2f}C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    F "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"转换后的温度是{:.2f}F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"输入格式错误"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"python程序语法元素分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python程序语法元素分析"}},[t._v("#")]),t._v(" python程序语法元素分析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("程序的格式框架")])]),t._v(" "),a("li",[a("p",[t._v("命名与保留字")])]),t._v(" "),a("li",[a("p",[t._v("数据类型")])]),t._v(" "),a("li",[a("p",[t._v("语句与函数")])]),t._v(" "),a("li",[a("p",[t._v("python程序的输入与输出")])]),t._v(" "),a("li",[a("p",[t._v('"温度转换代码"逐行分析')])])]),t._v(" "),a("h4",{attrs:{id:"程序格式框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序格式框架"}},[t._v("#")]),t._v(" 程序格式框架")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码高亮（编成的色彩辅助体系，不是语法要求）")])]),t._v(" "),a("li",[a("p",[t._v("缩进 （一行代码开始前的空白区域，"),a("code",[t._v("表达程序的格式框架")]),t._v("）")])])]),t._v(" "),a("p",[t._v("在python中，缩进表达程序的格式框架")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- 严格明确 缩进是语法的一部分，缩进不正确程序运行错误\n- 所属关系 表达代码间包含和层次关系的唯一手段\n")])])]),a("ul",[a("li",[t._v("长度一致 程序内一致即可，一般用4个空格或一个TAB")])]),t._v(" "),a("ul",[a("li",[t._v("注释 ：不被程序执行的辅助性说明信息，可提高代码可读性")]),t._v(" "),a("li",[t._v("单行注释 以"),a("code",[t._v("#")]),t._v("开头，其后内容为注释")]),t._v(" "),a("li",[t._v("多行注释 以 ``` 开头和结尾")])]),t._v(" "),a("h4",{attrs:{id:"命名与保留字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名与保留字"}},[t._v("#")]),t._v(" 命名与保留字")]),t._v(" "),a("p",[t._v("命名：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("变量 ：是用来保存和表示数据的占位符号")]),t._v(" "),a("p",[t._v("变量采用标识符（名字）来表示，关联标识符的过程叫作命名（给变量 命名）")])])]),t._v(" "),a("p",[t._v("例如，温度转换实例中 "),a("code",[t._v("TempStr")]),t._v("是变量名字")]),t._v(" "),a("ul",[a("li",[t._v("可以使用符号等号"),a("code",[t._v("=")]),t._v("向变量赋值或修改值， "),a("code",[t._v("=")]),t._v('被称为赋值符号 例如:TempStr = "82F"  #向变量TempStr赋值"82F"')])]),t._v(" "),a("p",[a("code",[t._v("=")]),t._v("为赋值符号")]),t._v(" "),a("h5",{attrs:{id:"关联标识符的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联标识符的过程"}},[t._v("#")]),t._v(" 关联标识符的过程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命名规则 ：大小写字母，数字，下划线，汉字等字符及组合")])]),t._v(" "),a("li",[a("p",[t._v("注意事项：大小写敏感，首字符不能是数字，且不与保留字相同")])])]),t._v(" "),a("h5",{attrs:{id:"保留字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保留字"}},[t._v("#")]),t._v(" 保留字")]),t._v(" "),a("p",[t._v("是被编程语言内部定义并保留使用的标识符")]),t._v(" "),a("p",[t._v("Python语言中一共有33个保留字（关键字）")]),t._v(" "),a("ul",[a("li",[t._v("保留字是编程语言的基本单词，大小写敏感")])]),t._v(" "),a("p",[t._v("['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'exc\nept', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',\n'try', 'while', 'with', 'yield']")]),t._v(" "),a("p",[t._v("在python命令行中，可通过")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" keyword\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kerword.kwlist\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'False'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'True'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'and'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'as'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assert'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'await'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'break'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'continue'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'def'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'del'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'elif'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'else'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'except'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finally'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'for'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'if'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'import'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'in'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lambda'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonlocal'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'or'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pass'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raise'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'return'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'try'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'while'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'with'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yield'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("blockquote",[a("p",[t._v("整数")])]),t._v(" "),a("blockquote",[a("p",[t._v("浮点数")])]),t._v(" "),a("blockquote",[a("p",[t._v("列表")])]),t._v(" "),a("blockquote",[a("p",[t._v("字符串")])]),t._v(" "),a("p",[t._v("数据表达方式不同，为了使编程语言准确且无歧义，所以给计算机程序赋予数据的时候，需要告诉计算机程序如何去解释或表达该数据")]),t._v(" "),a("p",[t._v("概念：我们在将一段信息输入给计算机程序的时候，需要关联一种与这段信息相适应的一个形式定义。程序设计语言通过一定方式向计算机表达数据形式的这样的方式就叫数据类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("整数")]),t._v("类型 ："),a("code",[t._v("123")]),t._v(" 表示整数123")]),t._v(" "),a("li",[a("code",[t._v("字符串")]),t._v("类型："),a("code",[t._v('"123"')]),t._v("/"),a("code",[t._v("'123'")]),t._v("表示字符串123")]),t._v(" "),a("li",[a("code",[t._v("列表")]),t._v("类型： "),a("code",[t._v("[1,2,3]")]),t._v("表示1,2,3三个数字")])]),t._v(" "),a("h5",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("p",[t._v("由0个或多个字符组成的有序字符序列，字符串就是由一对单引号或双引号表示的有序字符序列")]),t._v(" "),a("p",[t._v("且，字符串是字符的有序数列可以对其中的字符进行索引")]),t._v(" "),a("blockquote",[a("p",[t._v("字符串中的编号是从0开始的")])]),t._v(" "),a("p",[t._v("python提供了两种索引形式：正向递增序号和反向递减序号")]),t._v(" "),a("p",[t._v("正向递增序号从左至右，由0开始依次增加")]),t._v(" "),a("p",[t._v("反向递减 序号从右往左，由-1开始依次递减")]),t._v(" "),a("p",[t._v("可以使用一个"),a("code",[t._v("[]")]),t._v("来获取字符串中的一个或者多个字符，这表现为字符串的索引和切片操作")]),t._v(" "),a("h6",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),a("p",[t._v("返回字符串中单个字符 "),a("code",[t._v("<字符串> [M]")])]),t._v(" "),a("p",[t._v("例:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入带有符号的温度值: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#获取字符串"请输入带有符号的温度值: "的第0个字符')]),t._v("\nTempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示获取TempStr该变量字符串的第-1（倒数第一个）个字符")]),t._v("\n")])])]),a("h6",{attrs:{id:"切片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切片"}},[t._v("#")]),t._v(" 切片")]),t._v(" "),a("p",[t._v("只返回字符串中的一串字符，或一个字符的子串 <字符串>[M:N]")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入带有符号的温度值："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指的是取出其中的第一个字符，第二个字符，但不到第三个字符，因此表达的是字符出的输入")]),t._v("\nTempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示从0开始，不到-1的一串字符字串，相当于把最后一个字符去掉")]),t._v("\n")])])]),a("h5",{attrs:{id:"数字类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字类型"}},[t._v("#")]),t._v(" 数字类型")]),t._v(" "),a("p",[t._v("整数 ：数学中的整数 如 32或-89 （包括正数负数）")]),t._v(" "),a("p",[t._v("浮点数 ：表示数学中的实数，且带有小数部分 如1.8 或者-1,8 或者 -1.0 （同样包含正负数）")]),t._v(" "),a("h5",{attrs:{id:"列表类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表类型"}},[t._v("#")]),t._v(" 列表类型")]),t._v(" "),a("p",[t._v("由 0个或多个数据组成的有序数列")]),t._v(" "),a("p",[t._v("列表使用"),a("code",[t._v("[]")]),t._v("表示，采用"),a("code",[t._v(",")]),t._v("逗号分隔各个元素")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列表元素，表示两个元素'")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("F' 和'")])]),t._v("f'\n")])])]),a("p",[t._v("可以使用保留字"),a("code",[t._v("in")]),t._v("判断一个元素是否在列表中")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#判断前者是否与列表中的某一个元素相同")]),t._v("\n")])])]),a("h4",{attrs:{id:"语句与函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句与函数"}},[t._v("#")]),t._v(" 语句与函数")]),t._v(" "),a("h5",{attrs:{id:"赋值语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值语句"}},[t._v("#")]),t._v(" 赋值语句")]),t._v(" "),a("p",[t._v("由赋值符号构成的一行代码")]),t._v(" "),a("p",[t._v("-赋值语句用来给变量赋予新的数据值")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("C"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右侧运算结果赋值给变量C")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("-赋值语句右侧的数据类型同时作用于变量\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# input()将返回一个字符串，TempStr也是字符串")]),t._v("\n")])])]),a("h5",{attrs:{id:"分支语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支语句"}},[t._v("#")]),t._v(" 分支语句")]),t._v(" "),a("p",[t._v("由判断条件决定程序运行方向的语句")]),t._v(" "),a("p",[t._v("-使用保留字 "),a("code",[t._v("if elif else")]),t._v("构成条件判断的分支程序")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果条件为True则执行冒号后语句")]),t._v("\n")])])]),a("p",[t._v("冒号的含义：如果条件成立，则执行冒后后带有缩进的语句，如果条件不成立，冒号以及冒号后面的缩进语句将会被跳过")]),t._v(" "),a("ul",[a("li",[t._v("分支语句每个保留字所在行的最后面存在一个冒号"),a("code",[t._v(":")]),t._v(".其是语法的一部分，"),a("code",[t._v("冒号及后续缩进用来表示后续语句与条件的所属关系")]),t._v("  一定不能将其省略！")])]),t._v(" "),a("h5",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("p",[t._v("根据输入参数产生不同输出的功能过程")]),t._v(" "),a("p",[t._v("类似数学中的函数，y=f(x)")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文本"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 打印输出"文本"')]),t._v("\n")])])]),a("p",[t._v("-函数采用 <函数名>(<参数>)方式使用")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v('"'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TempStr[0:-1]是参数")]),t._v("\n")])])]),a("h4",{attrs:{id:"python程序的输入与输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python程序的输入与输出"}},[t._v("#")]),t._v(" python程序的输入与输出")]),t._v(" "),a("h5",{attrs:{id:"输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),a("p",[t._v("输入是程序获得外部信息的一个过程")]),t._v(" "),a("p",[t._v("大多数程序中都使用input函数从控制台获得用户输入的函数")]),t._v(" "),a("p",[t._v("输入函数 "),a("code",[t._v("input()")])]),t._v(" "),a("p",[t._v("格式：<变量> = input(<提示信息字符串>)")]),t._v(" "),a("p",[t._v("-用户输入的信息以字符串类型表示在<变量>中")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("TempStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TempStr保存用户输入的信息")]),t._v("\n")])])]),a("p",[t._v("input函数返回的信息，会以字符串的类型保存在变量TempStr中")]),t._v(" "),a("h5",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("p",[t._v("输出函数 print ()")]),t._v(" "),a("p",[t._v("以字符形式向控制台输出结果的函数")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("拟输出字符串或字符串变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("字符串类型的一对引号只在程序内部使用，输出无引号")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"输出格式错误"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向控制台输出 输出格式错误")]),t._v("\n")])])]),a("p",[t._v("print()格式化")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"转换后的温度是{:.2f}C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {}表示槽，后续变量填充到槽中 ，{:.2f}表示将变量C填充到这个位置时取小数点后两位")]),t._v("\n")])])]),a("p",[t._v("评估函数 eval()")]),t._v(" "),a("p",[t._v("去掉参数最外侧引号并执行余下语句")]),t._v(" "),a("ul",[a("li",[t._v("eval()函数的基本使用格式")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("字符串或字符串变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("能将任何形式的字符串信息转换成 python语句")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#如果TempStr[0:-1]的值是一个字符串"12.3",那么它外侧的引号会被去掉而称为数字类型12.3')]),t._v("\n")])])]),a("h4",{attrs:{id:"温度转换代码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#温度转换代码分析"}},[t._v("#")]),t._v(" 温度转换代码分析")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TempConcert.py  (注释)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入，input函数，用户输入的值将会保存在变量TempStr中")]),t._v("\nTempStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入带有符号的温度值："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留字if表达的是一个分支语句，它会判断后面的条件是否成立")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if后方判断TempStr的第-1个值是否在列表类型当中，如果在，就是说用户输入了一个华氏温度值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反之则表示用户输入了一个非华氏度温度值，跳过下列两行代码（不包括注释）直接进行下第三行代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  对输入的华氏温度值根据转换公式进行转换，")]),t._v("\n    C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出，且此处为print()函数的格式化")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"转换后的温度是{:.2f}C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留字elif表达的也是一个分支语句，如果用户输入的值满足后方条件，则执行下列所属缩进的代码，反之则跳过并执行下一个分支语句    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    F "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TempStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"转换后的温度是{:.2f}F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保留字else同样是一个分支语句，表示非")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"输入格式错误"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"小节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小节"}},[t._v("#")]),t._v(" 小节")]),t._v(" "),a("p",[t._v("小白在此")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("缩进")]),t._v(" "),a("p",[t._v("用来表达语句间的层次关系以及包含关系")])]),t._v(" "),a("li",[a("p",[t._v("注释")])])]),t._v(" "),a("p",[t._v("编写者为了提高代码可读性，写的辅助信息，不被计算机执行")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命名")]),t._v(" "),a("p",[t._v("是给变量关联标识符或赋值的过程")])]),t._v(" "),a("li",[a("p",[t._v("变量")]),t._v(" "),a("p",[t._v("是用来标识数据值的占位符")])]),t._v(" "),a("li",[a("p",[t._v("保留字")]),t._v(" "),a("p",[t._v("是计算机的程序语言中默认保留下来为程序语言所使用的")])])]),t._v(" "),a("p",[t._v("数据类型")]),t._v(" "),a("p",[t._v("字符串，数字类型，列表类型")]),t._v(" "),a("p",[t._v("赋值语句，分支语句，函数")]),t._v(" "),a("p",[t._v("赋值语句：由赋值符号构成的")]),t._v(" "),a("p",[t._v("分支语句，由if elif else 构成云云")]),t._v(" "),a("p",[t._v("三个具体的函数")]),t._v(" "),a("p",[t._v("input()")]),t._v(" "),a("p",[t._v("print()")]),t._v(" "),a("p",[t._v("eval()")]),t._v(" "),a("p",[t._v("print()格式化")])])}),[],!1,null,null,null);s.default=r.exports}}]);