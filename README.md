# React Native FlatList Flickering Issue

This repository demonstrates a common issue with React Native's FlatList component when rendering items with dynamic heights. The problem manifests as flickering or layout inconsistencies due to the way FlatList handles height measurement and updates.  The solution provided uses `getItemLayout` to significantly improve performance and reduce flickering.

## Bug

The `bug.js` file shows a basic implementation of FlatList with items having dynamic heights, leading to flickering.

## Solution

The `bugSolution.js` file demonstrates the solution which involves using `getItemLayout` prop to provide FlatList with estimated item heights. This eliminates the need for multiple layout updates. 

## How to run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`.