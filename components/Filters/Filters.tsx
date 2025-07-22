'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Button, Stack, Typography } from '@mui/material';

export default function Filters() {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ px: 2, py: 1 }}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <FilterAltOutlinedIcon fontSize="small" sx={{ color: '#00332a' }} />
        <Typography variant="body2" sx={{ color: '#00332a', fontWeight: 500 }}>
          Filtrar
        </Typography>
      </Stack>

      <Button
        variant="outlined"
        size="small"
        endIcon={<ArrowDropDownIcon />}
        sx={{
          textTransform: 'none',
          fontSize: '0.875rem',
          borderColor: '#00332a',
          color: '#00332a',
          paddingX: 2,
          paddingY: 0.5,
          borderRadius: 2,
          fontWeight: 500,
        }}
      >
        publicación
      </Button>
    </Stack>
  );
}
