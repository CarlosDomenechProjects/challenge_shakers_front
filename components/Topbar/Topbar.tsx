"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Topbar() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Typography variant="subtitle1" fontWeight={500}>
          Buscar Proyectos
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar
            alt="Usuario"
            src="/avatar.jpg" // Reemplaza por tu ruta o avatar dinámico
            sx={{ width: 32, height: 32, borderRadius: "8px" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
