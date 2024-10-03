import { Text, Button, FlatList, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

 
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

const Home = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'], 
        queryFn: fetchPosts,
    });


    if (isLoading) return <ActivityIndicator size="large" color="#00000ff" />;
    if (error) return <Text>Error: {error.message}</Text>

  return (
    <View>
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View>
                <Text>{item.title}</Text>
            </View>
        )}
        />
    </View>
  );
};

export default Home
