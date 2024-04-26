'use client'

import mainTheme from "@/config/mantineTheme";
import { MantineProvider } from '@mantine/core';

type ProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <MantineProvider theme={mainTheme}>
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider