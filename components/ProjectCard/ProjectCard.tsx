'use client';

import { Card, CardActions, Avatar, Typography, Stack, Chip, IconButton, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
  logo: string;
  title: string;
  category: string;
  price: string;
  tech: string[];
};

export default function ProjectCard({ logo, title, category, price, tech }: Props) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2 }}>
      <Avatar src={logo} sx={{ width: 56, height: 56, mr: 2 }} />

      <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
          <Chip label={price} size="small" color="primary" />
        </Stack>
        <Typography variant="body2" color="text.secondary">{category}</Typography>

        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
          {tech.map((t, i) => (
            <Chip key={i} label={t} variant="outlined" size="small" />
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
