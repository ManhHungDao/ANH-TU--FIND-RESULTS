import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Paper,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const softPaper = {
  borderRadius: 2,
  border: "1px solid rgba(2,6,23,0.06)",
  background: "linear-gradient(180deg, #ffffff, #fafcff)",
};

const percentColor = (p) => {
  if (p >= 60) return "error";
  if (p >= 30) return "warning";
  if (p > 0) return "success";
  return "default";
};

export default function ResultDisplayPanel({ risk, rows, sxCard }) {
  return (
    <Card sx={sxCard}>
      <CardHeader
        title="Kết quả đánh giá"
        subheader="Tính theo bộ quy tắc minh hoạ"
      />
      <CardContent>
        <Stack spacing={2}>
          <Paper elevation={0} sx={{ ...softPaper, p: 2 }}>
            <Stack direction="row" alignItems="baseline" spacing={1}>
              <Typography variant="h3" fontWeight={800}>
                {risk}%
              </Typography>
              <Chip
                size="small"
                color={percentColor(risk)}
                label={
                  risk >= 60
                    ? "Rất cao"
                    : risk >= 30
                    ? "Trung bình - cao"
                    : risk > 0
                    ? "Thấp"
                    : "N/A"
                }
                sx={{ fontWeight: 700 }}
              />
            </Stack>
            <Typography variant="body2" sx={{ opacity: 0.7, mt: 0.5 }}>
              Có thể tinh chỉnh quy tắc để phản ánh dữ liệu thực tế/ý kiến
              chuyên gia.
            </Typography>
          </Paper>

          <Divider textAlign="left">Tóm tắt biến số</Divider>
          <TableContainer component={Paper} elevation={0} sx={softPaper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Biến số</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Giá trị</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.label}>
                    <TableCell width={220}>{r.label}</TableCell>
                    <TableCell>{r.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </CardContent>
    </Card>
  );
}
