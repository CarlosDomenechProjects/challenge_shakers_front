"use client";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ProjectCardProps } from "types/ui";

export default function ProjectCard({
  logo,
  title,
  category,
  price,
  tech,
}: ProjectCardProps) {
  return (
    <Card sx={{ display: "flex", alignItems: "flex-start", p: 2, mb: 2 }}>
      <Avatar src={logo} sx={{ width: 56, height: 56, mr: 2 }} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={0.5}>
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          flexWrap="wrap"
          mb={1}
        >
          {category.split("|").map((part, index) => (
            <Typography
              key={index}
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {part.trim()}
              {index < category.split("|").length - 1 && " |"}
            </Typography>
          ))}

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "#005046",
              marginLeft: 1,
            }}
          >
            | {price}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {tech.map((t, i) => (
            <Typography
              key={i}
              variant="caption"
              sx={{
                backgroundColor: "#f1f5f9",
                color: "#334155",
                padding: "4px 8px",
                borderRadius: "16px",
                fontWeight: 500,
              }}
            >
              {t}
            </Typography>
          ))}
        </Stack>
      </Box>

      <CardActions>
        <IconButton>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
