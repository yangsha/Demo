## 平台相关模块和文件说明

### 模型页面

#### ModelTab

模型标签页中相关的组件文件

- `ModelTab.tsx`

  主页面，负责展示每个算法模型所有实例的页面。

- `InstanceRow.tsx`

  展示实例列表的每一个实例的信息。包括了**启动训练**、**启动部署**以及相关信息的展示按钮。

- `InstanceDetail.tsx`

  展示实例的一些训练参数。

- `InstanceTest.tsx`

  测试部署完毕实例的页面。包括 API 地址、输出和输出等模块。
  `ApiInfo`包括 api 的输入输出的参数格式。

- `PerformanceCard.tsx`

  展示训练完毕实例的一些性能指标。

#### AddModelInstance

创建算法实例组件的相关文件

- `ChooseDataset.tsx`

  创建实例对话框的第一步，包括输入名称、选择训练集（和训练集），选择划分方式等组件。

- `SetParamter.tsx`

  创建实例对话框的第二步，包括选择算法模型和插件，以及设置对应的参数。其中`ModelSelect.tsx`和`PluginSelect.tsx`分别是选择算法模型的组件和选择算法插件的组件。

  `ParamValueCell.tsx`负责接收`param`参数组、`index`参数索引和`handleValueChange`参数改变的回调函数来实现多类型参数输入组件的渲染。

#### testResourceDir

用于测试的伪造数据。

#### 相关数据结构

主要在`interfaces.ts`中

`ModelInstanceRecord`：模型实例的数据结构

`ModelRecord`:模型标签页的数据。

`instanceStatus`：模型实例的状态，依次为等待训练、训练中、训练成功、训练失败、部署成功和部署失败。
 

