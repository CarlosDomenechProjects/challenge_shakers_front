"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
  TextField,
  Autocomplete,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { FiltersModalProps } from "types/ui";

const sampleOptions = [
  "Front End Developer",
  "Back End Developer",
  "Full Stack",
  "DevOps",
];

export default function FiltersModal({ open, onClose }: FiltersModalProps) {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState("newest");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Filtrar Proyectos
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={2}>
          <Box display="flex" gap={2}>
            <Box flex={1}>
              <Autocomplete
                multiple
                options={sampleOptions}
                value={selectedRoles}
                onChange={(_, value) => setSelectedRoles(value)}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                      key={option}
                      sx={{ borderRadius: 2 }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Especialidades"
                    placeholder="Busca y añade"
                    fullWidth
                  />
                )}
              />
            </Box>
            <Box width={80}>
              <TextField type="number" size="small" fullWidth />
            </Box>
          </Box>

          <Box display="flex" gap={2}>
            <Box flex={1}>
              <TextField
                fullWidth
                label="Habilidades"
                placeholder="Busca y añade"
              />
            </Box>
            <Box width={80}>
              <TextField type="number" size="small" fullWidth />
            </Box>
          </Box>

          <Box display="flex" gap={2}>
            <Box flex={1}>
              <TextField
                fullWidth
                label="Tipo de proyecto"
                placeholder="Busca y añade"
              />
            </Box>
            <Box width={80}>
              <TextField type="number" size="small" fullWidth />
            </Box>
          </Box>

          <Box display="flex" gap={2}>
            <Box flex={1}>
              <TextField
                fullWidth
                label="Industria"
                placeholder="Busca y añade"
              />
            </Box>
            <Box width={80}>
              <TextField type="number" size="small" fullWidth />
            </Box>
          </Box>

          <Box mt={3}>
            <Typography fontWeight={500} mb={1}>
              Ordenar por
            </Typography>
            <RadioGroup
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              name="order"
            >
              <FormControlLabel
                value="newest"
                control={<Radio />}
                label="Fecha de publicación (Más reciente primero)"
              />
              <FormControlLabel
                value="oldest"
                control={<Radio />}
                label="Fecha de publicación (Más antiguo primero)"
              />
            </RadioGroup>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", mt: 1 }}>
        <Button onClick={onClose} sx={{ color: "#d93025", fontWeight: 500 }}>
          Eliminar Filtros
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ backgroundColor: "#00332a", borderRadius: 2, px: 3 }}
        >
          Filtrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
