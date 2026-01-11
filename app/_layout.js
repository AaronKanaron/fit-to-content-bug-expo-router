import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="make-post"
        options={{
          presentation: 'formSheet',
          headerShown: true,
          headerTitle: 'Bug test',
          sheetGrabberVisible: true,
          sheetAllowedDetents: "fitToContents",
        }}
      />
    </Stack>
  );
}
