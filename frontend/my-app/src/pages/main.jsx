import React, { useMemo, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Stack,
  Tooltip,
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PrintIcon from "@mui/icons-material/Print";

/**
 * TheftRiskEvaluator.jsx
 * UI minh hoạ đánh giá rủi ro "trộm cắp" theo biến số, thiết kế bằng MUI.
 * Giao diện dịu mắt, dễ dùng cho người mới.
 */

const sxCard = {
  borderRadius: 3,
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
  overflow: "hidden",
};

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

export default function TheftRiskEvaluator() {
  // State cho các biến số
  const [nhanThan, setNhanThan] = useState("khong_tien_an");
  const [moiTruong, setMoiTruong] = useState("khong_gan_tp");
  const [gioGiac, setGioGiac] = useState("khong_di_dem");
  const [phuongTien, setPhuongTien] = useState("binh_thuong");
  const [moiQuanHe, setMoiQuanHe] = useState("binh_thuong");

  // Tính rủi ro (minh hoạ). Có thể thay đổi công thức cho phù hợp nghiệp vụ.
  const risk = useMemo(() => {
    let r = 5; // mức nền ~5%

    if (nhanThan === "co_tien_an") r += 20;
    if (moiTruong === "gan_tp") r += 10;
    if (gioGiac === "hay_di_dem") r += 10;
    if (phuongTien === "xe_khong_bien") r += 10;
    if (moiQuanHe === "bang_nhom") r += 15;

    // Ví dụ logic đặc biệt theo bảng mô tả người dùng
    if (
      nhanThan === "khong_tien_an" &&
      moiTruong === "gan_tp" &&
      gioGiac === "khong_di_dem"
    ) {
      r = 10;
    }
    if (
      nhanThan === "khong_tien_an" &&
      moiTruong === "khong_gan_tp" &&
      gioGiac === "hay_di_dem"
    ) {
      r = Math.max(r, 5);
    }

    return Math.max(0, Math.min(95, r));
  }, [nhanThan, moiTruong, gioGiac, phuongTien, moiQuanHe]);

  const rows = [
    {
      label: "Nhân thân",
      value: nhanThan === "khong_tien_an" ? "Không tiền án" : "Có tiền án",
    },
    {
      label: "Môi trường sống",
      value: moiTruong === "gan_tp" ? "Gần tội phạm" : "Không gần tội phạm",
    },
    {
      label: "Giờ giấc hoạt động",
      value: gioGiac === "hay_di_dem" ? "Hay đi đêm" : "Không đi đêm",
    },
    {
      label: "Phương tiện sử dụng",
      value:
        phuongTien === "xe_khong_bien" ? "Xe máy không biển số" : "Bình thường",
    },
    {
      label: "Mối quan hệ của nó",
      value: moiQuanHe === "bang_nhom" ? "Băng nhóm/đồng phạm" : "Bình thường",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
        <AssessmentIcon />
        <Typography variant="h5" fontWeight={700} letterSpacing={0.2}>
          Đánh giá rủi ro trộm cắp
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {/* Bộ chọn biến số */}
        <Grid item xs={12} md={6}>
          <Card sx={sxCard}>
            <CardHeader
              title="Biến số đầu vào"
              subheader="Chọn các giá trị quan sát được để hệ thống tính rủi ro"
            />
            <CardContent>
              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Nhân thân</InputLabel>
                  <Select
                    label="Nhân thân"
                    value={nhanThan}
                    onChange={(e) => setNhanThan(e.target.value)}
                  >
                    <MenuItem value="khong_tien_an">Không tiền án</MenuItem>
                    <MenuItem value="co_tien_an">Có tiền án</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel>Môi trường sống</InputLabel>
                  <Select
                    label="Môi trường sống"
                    value={moiTruong}
                    onChange={(e) => setMoiTruong(e.target.value)}
                  >
                    <MenuItem value="khong_gan_tp">Không gần tội phạm</MenuItem>
                    <MenuItem value="gan_tp">Gần tội phạm</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel>Giờ giấc hoạt động</InputLabel>
                  <Select
                    label="Giờ giấc hoạt động"
                    value={gioGiac}
                    onChange={(e) => setGioGiac(e.target.value)}
                  >
                    <MenuItem value="khong_di_dem">Không đi đêm</MenuItem>
                    <MenuItem value="hay_di_dem">Hay đi đêm</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel>Phương tiện sử dụng</InputLabel>
                  <Select
                    label="Phương tiện sử dụng"
                    value={phuongTien}
                    onChange={(e) => setPhuongTien(e.target.value)}
                  >
                    <MenuItem value="binh_thuong">Bình thường</MenuItem>
                    <MenuItem value="xe_khong_bien">
                      Xe máy không biển số
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small">
                  <InputLabel>Mối quan hệ của nó</InputLabel>
                  <Select
                    label="Mối quan hệ của nó"
                    value={moiQuanHe}
                    onChange={(e) => setMoiQuanHe(e.target.value)}
                  >
                    <MenuItem value="binh_thuong">Bình thường</MenuItem>
                    <MenuItem value="bang_nhom">Băng nhóm/đồng phạm</MenuItem>
                  </Select>
                </FormControl>

                <Stack direction="row" spacing={1}>
                  <Tooltip title="In hoặc lưu PDF qua hộp thoại in của trình duyệt">
                    <Button
                      variant="outlined"
                      startIcon={<PrintIcon />}
                      onClick={() => window.print()}
                    >
                      In báo cáo
                    </Button>
                  </Tooltip>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Kết quả & Bảng tóm tắt */}
        <Grid item xs={12} md={6}>
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
                  <Table size="small" aria-label="tom-tat-bien-so">
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
        </Grid>

        {/* Hộp quy tắc minh hoạ */}
        <Grid item xs={12}>
          <Card sx={sxCard}>
            <CardHeader title="Quy tắc tính điểm (minh hoạ)" />
            <CardContent>
              <Box sx={{ typography: "body2", lineHeight: 1.8 }}>
                <ul style={{ marginTop: 0 }}>
                  <li>Mức nền: 5%.</li>
                  <li>
                    +20% nếu <b>có tiền án</b>.
                  </li>
                  <li>
                    +10% nếu <b>gần tội phạm</b>.
                  </li>
                  <li>
                    +10% nếu <b>hay đi đêm</b>.
                  </li>
                  <li>
                    +10% nếu <b>xe máy không biển số</b>.
                  </li>
                  <li>
                    +15% nếu <b>có băng nhóm/đồng phạm</b>.
                  </li>
                  <li>
                    Trường hợp đặc biệt từ mô tả của bạn: <i>không tiền án</i> +{" "}
                    <i>gần tội phạm</i> + <i>không đi đêm</i> ⇒<b> 10%</b>.
                  </li>
                  <li>Giới hạn kết quả từ 0% đến 95%.</li>
                </ul>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  Lưu ý: Đây là mô hình tính điểm minh hoạ phục vụ giao diện.
                  Không phải kết luận pháp lý.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
