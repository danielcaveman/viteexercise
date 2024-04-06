import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box margin="0 auto" maxWidth={600}>
      {children}
    </Box>
  );
}
