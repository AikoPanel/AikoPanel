#!/bin/bash
bash <(curl -ls https://raw.githubusercontent.com/AikoPanel/AikoServer/master/install.sh)

    read -p "Nhập Node ID - 80 vmess :" node_80
    echo -e "Node_80 là : ${node_80}"    
    
    read -p "Nhập Node ID - 443 trojan :" node_443
    echo -e "Node_443 là : ${node_443}"  

cd /etc/Aiko-Server
mkdir cert

cat >aiko.yml <<EOF
Nodes:
  - PanelType: "AikoPanel"
    ApiConfig:
      ApiHost: "https://aikopanel.com"
      ApiKey: ""
      NodeID: ${node_80}
      NodeType: V2ray
      Timeout: 30
      EnableVless: false
    ControllerConfig:
      DisableLocalREALITYConfig: false
      EnableREALITY: false
      REALITYConfigs:
        Show: true
      CertConfig:
        CertMode: none
        CertFile: /etc/Aiko-Server/cert/aiko_server.cert
        KeyFile: /etc/Aiko-Server/cert/aiko_server.key
  - PanelType: "AikoPanel"
    ApiConfig:
      ApiHost: "https://aikopanel.com"
      ApiKey: ""
      NodeID: ${node_443}
      NodeType: Trojan
      Timeout: 30
      EnableVless: false
    ControllerConfig:
      DisableLocalREALITYConfig: false
      EnableREALITY: false
      REALITYConfigs:
        Show: true
      CertConfig:
        CertMode: file
        CertFile: /etc/Aiko-Server/cert/aiko_server.cert
        KeyFile: /etc/Aiko-Server/cert/aiko_server.key     
EOF

echo "Bạn muốn cài đặt chứng chỉ SSL không ?"
echo "1. Có"
echo "2. Không"
read -p "Chọn 1 hoặc 2 :" ssl
case $ssl in
1)
    echo "Bạn đã chọn cài đặt chứng chỉ SSL"
    echo "Đang cài đặt chứng chỉ SSL"
    aiko-server cert
    ;;
2)
    echo "Bạn đã chọn không cài đặt chứng chỉ SSL"
    ;;
esac

cd /root