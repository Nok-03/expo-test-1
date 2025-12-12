import React from 'react';
import { Tabs } from 'expo-router'; // 引入 Tabs 導航元件
import { Ionicons } from '@expo/vector-icons'; // 引入 Expo 內建圖示庫

export default function TabLayout() {
  return (
    // <Tabs> 是用來創建底部標籤導航列的根元件
    <Tabs
      screenOptions={{
        // 定義選中和未選中標籤的顏色
        tabBarActiveTintColor: '#9F5000', // 選中標籤的顏色（棕色系）
        tabBarInactiveTintColor: 'gray', // 未選中標籤的顏色
      }}
    >
      {/* =======================================================
         注意：Tabs.Screen 的順序決定了標籤列上的顯示順序
         ======================================================= */}

      

      {/* 2. 歷史紀錄 Tab (history.js) */}
      <Tabs.Screen
        name="history" // 路由檔案名 (對應 app/history.js)
        options={{
          title: '歷史紀錄',
          tabBarIcon: ({ color }) => (
            // 設置圖示為 time (時鐘)
            <Ionicons name="time" color={color} size={24} />
          ),
        }}
      />

      {/* 3. 社群 Tab (people.js) */}
      <Tabs.Screen
        name="people" // 路由檔案名 (對應 app/people.js)
        options={{
          title: '社群',
          tabBarIcon: ({ color }) => (
            // 設置圖示為 people (人群)
            <Ionicons name="people" color={color} size={24} />
          ),
        }}
      />


      {/* 1. 首頁 Tab: 我的櫃子 (index.js) */}
      <Tabs.Screen
        name="index" // 路由檔案名 (對應 app/index.js)
        options={{
          title: '我的櫃子', // 標籤列上顯示的名稱
          headerTitle: '應用程式主頁', // 頁面頂部的標題
          tabBarIcon: ({ color }) => (
            // 設置圖示為 beaker (燒杯/實驗室)
            <Ionicons name="beaker" color={color} size={24} />
          ),
        }}
      /> 
      
      {/* 4. 好友 Tab (friend.js) */}
      <Tabs.Screen
        name="friend" // 路由檔案名 (對應 app/friend.js)
        options={{
          title: '好友',
          tabBarIcon: ({ color }) => (
            // 設置圖示為 happy (開心/笑臉)
            <Ionicons name="happy" color={color} size={24} />
          ),
        }}
      />
      
      {/* 5. AI聊天 Tab (AI.js) */}
      <Tabs.Screen
        name="AI" // 路由檔案名 (對應 app/AI.js)
        options={{
          title: 'AI聊天',
          tabBarIcon: ({ color }) => (
            // 設置圖示為 chatbubble-ellipses (聊天氣泡)
            <Ionicons name="chatbubble-ellipses" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}