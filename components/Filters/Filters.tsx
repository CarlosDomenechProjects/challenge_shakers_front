'use client';

import { Button, Stack } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import FiltersModal from './FiltersModal';

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="flex-end"
        sx={{ px: 2, py: 1 }}
      >
        <Button
          variant="text"
          size="small"
          startIcon={<FilterAltOutlinedIcon />}
          onClick={() => setOpen(true)}
          sx={{
            textTransform: 'none',
            fontSize: '0.875rem',
            color: '#00332a',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
        >
          Filtrar
        </Button>

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
            '&:hover': {
              backgroundColor: '#f3f4f6',
              borderColor: '#00332a',
            },
          }}
        >
          publicación
        </Button>
      </Stack>

      <FiltersModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
