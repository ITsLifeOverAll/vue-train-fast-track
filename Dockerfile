# 使用 Nginx 作為運行階段
FROM nginx:alpine

# 複製已經 build 好的靜態檔案到 Nginx 預設目錄
COPY dist /usr/share/nginx/html

# 可選：自訂 Nginx 設定（如果有 nginx.conf 請取消註解）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]