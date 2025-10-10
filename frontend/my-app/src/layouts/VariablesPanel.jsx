import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

export default function VariablesPanel({
  nhanThan,
  moiTruong,
  gioGiac,
  phuongTien,
  moiQuanHe,
  setNhanThan,
  setMoiTruong,
  setGioGiac,
  setPhuongTien,
  setMoiQuanHe,
  onPrint,
  sxCard,
}) {
  return (
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
              <MenuItem value="xe_khong_bien">Xe máy không biển số</MenuItem>
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

          <Tooltip title="In hoặc lưu PDF qua hộp thoại in của trình duyệt">
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              onClick={onPrint}
            >
              In báo cáo
            </Button>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
}
