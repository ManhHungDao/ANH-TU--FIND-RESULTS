import React from "react";
import { Card, CardHeader, CardContent, Box, Typography } from "@mui/material";

export default function RulesConfigPanel({ sxCard }) {
  return (
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
              Trường hợp đặc biệt: <i>không tiền án</i> + <i>gần tội phạm</i> +{" "}
              <i>không đi đêm</i> ⇒ <b>10%</b>.
            </li>
            <li>Giới hạn kết quả từ 0% đến 95%.</li>
          </ul>
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            Lưu ý: Đây là mô hình minh hoạ giao diện, không mang tính pháp lý.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
