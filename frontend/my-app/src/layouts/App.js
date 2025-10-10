import React, { useState, useMemo, useCallback } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";

import VariablesPanel from "./VariablesPanel";
import ResultDisplayPanel from "./ResultDisplayPanel";
import RulesConfigPanel from "./RulesConfigPanel";

const sxCard = {
  borderRadius: 3,
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
  overflow: "hidden",
};

export default function App() {
  // State cho các biến số
  const [nhanThan, setNhanThan] = useState("khong_tien_an");
  const [moiTruong, setMoiTruong] = useState("khong_gan_tp");
  const [gioGiac, setGioGiac] = useState("khong_di_dem");
  const [phuongTien, setPhuongTien] = useState("binh_thuong");
  const [moiQuanHe, setMoiQuanHe] = useState("binh_thuong");

  const handlePrint = useCallback(() => window.print(), []);

  // Tính rủi ro (minh hoạ)
  const risk = useMemo(() => {
    let r = 5;
    if (nhanThan === "co_tien_an") r += 20;
    if (moiTruong === "gan_tp") r += 10;
    if (gioGiac === "hay_di_dem") r += 10;
    if (phuongTien === "xe_khong_bien") r += 10;
    if (moiQuanHe === "bang_nhom") r += 15;

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

  const rows = useMemo(
    () => [
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
          phuongTien === "xe_khong_bien"
            ? "Xe máy không biển số"
            : "Bình thường",
      },
      {
        label: "Mối quan hệ của nó",
        value:
          moiQuanHe === "bang_nhom" ? "Băng nhóm/đồng phạm" : "Bình thường",
      },
    ],
    [nhanThan, moiTruong, gioGiac, phuongTien, moiQuanHe]
  );

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
        <AssessmentIcon />
        <Typography variant="h5" fontWeight={700} letterSpacing={0.2}>
          Đánh giá rủi ro trộm cắp
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <VariablesPanel
            nhanThan={nhanThan}
            moiTruong={moiTruong}
            gioGiac={gioGiac}
            phuongTien={phuongTien}
            moiQuanHe={moiQuanHe}
            setNhanThan={setNhanThan}
            setMoiTruong={setMoiTruong}
            setGioGiac={setGioGiac}
            setPhuongTien={setPhuongTien}
            setMoiQuanHe={setMoiQuanHe}
            onPrint={handlePrint}
            sxCard={sxCard}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ResultDisplayPanel risk={risk} rows={rows} sxCard={sxCard} />
        </Grid>

        <Grid item xs={12}>
          <RulesConfigPanel sxCard={sxCard} />
        </Grid>
      </Grid>
    </Container>
  );
}
