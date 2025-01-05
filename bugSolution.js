The solution involves using the `getItemLayout` prop of the FlatList component. This prop allows you to provide estimated height information to FlatList before rendering, thereby preventing layout recalculations and minimizing flickering.

```javascript
import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  height: Math.random() * 100 + 50, // Random heights between 50 and 150
}));

const Item = ({ height, id }) => (
  <View style={{ height: height, backgroundColor: '#f9c2ff', padding: 20 }}>
    <Text>Item {id}</Text>
  </View>
);

const App = () => {
  const getItemLayout = (data, index) => ({
    length: data[index].height,
    offset: data[index].height * index,
    index,
  });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item height={item.height} id={item.id} />}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
    />
  );
};

export default App;
```

By using `getItemLayout`, you're telling FlatList the approximate height of each item, preventing it from doing costly re-renders.