import React from 'react';
import { Table } from './Table';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '這個表格元件引用了 Table Components 資料夾中的 `HeaderCell` 與 `BodyCell` 兩個元件，該元件支援以下幾種需求：\n' +
          '- 表格欄位數可調整（3 ~ 39），可使用 `columnNum` 參數調整。欄位數改變時，請確認 `headLabels`、`cellTypes`、`data` 這幾個陣列參數的元素數量是否等於 `columnNum` 的值，避免執行上跳出錯誤訊息，詳細請參考下方參數說明。\n' +
          '- 整個表格的「第一欄 / 列」，以及「最後一欄 / 列」可以固定在視窗四周。可使用 `fixedFirstRow`、`fixedFirstCol`、`fixedLastRow`、`fixedLastCol` 這四個參數設定，詳細請參考下方參數說明。\n' +
          '- 表格元件的標題列（首列）支援 Sorting 的功能，可以在 `headLabels` 中的物件加入 `isSorting: true`，使該欄位有 Sorting 功能，詳細請參考下方參數說明。\n'
          ,
      },
    },
  },
  argTypes: {
    columnNum: {
      control: { type: 'number', min: 3, max:40, step: 1 },
      description: 'The number of table columns.',
    },
    fixedFirstRow: {
      control: 'boolean',
      description: 'To determine whether the first row is fixed.',
    },
    fixedLastRow: {
      control: 'boolean',
      description: 'To determine whether the last row is fixed.',
    },
    fixedFirstCol: {
      control: 'boolean',
      description: 'To determine whether the first column is fixed.',
    },
    fixedLastCol: {
      control: 'boolean',
      description: 'To determine whether the last column is fixed.',
    },
    headLabels: {
      control: 'object',
      description: 'The content and whether it can sorting or not of each column in the first row. The length of `headLabels` should be equal to the `columnNum`.',
    },
    cellTypes: {
      control: 'object',
      description: 'Types of each column (e.g., CellBadge, CellButton, CellButtonGroup, CellDropdown, CellImage, CellRadios, CellText, and CellToggleSwitch). The length of `cellTypes` should be equal to the `columnNum`.',
    },
    data: {
      control: 'object',
      description: 'The data of each row.',
    }
  },
  tags: ['autodocs'],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columnNum: 8,
  headLabels: [
    { content: '狀態'},
    { content: '商品編號', isSorting: true, },
    { content: '商品圖片'},
    { content: '活動優惠碼'},
    { content: '優惠活動'},
    { content: '優惠活動'},
    { content: '送貨狀態'},
    { content: '操作'},
  ],
  cellTypes: ['CellToggleSwitch', 'CellText', 'CellImage', 'CellButton', 'CellDropdown', 'CellRadios', 'CellBadge', 'CellButtonGroup'],
  data: [
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '002',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '001',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '003',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '004',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '005',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '006',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
    [ // one row
      { // CellToggleSwitch
        id: '',
        isSwitchChecked: false,
        isSwitchDisabled: false,
        isSwitchReadonly: false
      },
      { // CellText
        content: '007',
        hyperLink: '',
        isHeader: false,
        longTextLines: 0
      },
      { // CellImage
        altText: '91APP Logo',
        borderRadius: 50,
        imgSize: 30,
        imgSrc: 'data:image/png;base64,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'
      },
      {
        buttonColor: 'gray',
        content: 'ABC123',
        iconName: 'MdContentCopy',
        primary: false
      },
      { // CellDropdown
        defaultValue: '2024-618',
        dropdownContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        dropdownName: 'product-activity',
        placeholderText: '請選擇優惠活動'
      },
      { // CellRadios
        defaultValue: 'no',
        radioContents: [
          {
            content: '無活動',
            value: 'no'
          },
          {
            content: '618 購物節',
            value: '2024-618'
          }
        ],
        radioName: 'product-activity'
      },
      { // CellBadge
        badgeColor: 'green',
        content: '送貨中'
      },
      { // CellButtonGroup
        btns: [
          {
            buttonColor: 'green',
            content: '編輯',
            iconName: 'MdEdit',
            primary: false
          },
          {
            buttonColor: 'red',
            content: '刪除',
            iconName: 'MdDelete',
            primary: false
          }
        ],
        direction: 'column',
      },
    ],
  ],
  fixedFirstRow: true,
  fixedFirstCol: true,
};

export const ProductSaleReport = Template.bind({});
ProductSaleReport.args = {
  columnNum: 21,
  headLabels: [
    { content: '商品編號', isSorting: true, },
    { content: '商品名稱', isSorting: true, },
    { content: '商品類別'}, // drop
    { content: '供應商名稱', isSorting: true,},
    { content: '庫存量', isSorting: true, },

    { content: '售價', isSorting: true, },
    { content: '折扣', isSorting: true, },
    { content: '銷售數量', isSorting: true, },
    { content: '總銷售額', isSorting: true, },
    { content: '銷售日期', isSorting: true, },

    { content: '訂單編號', isSorting: true, },
    { content: '會員編號', isSorting: true, },
    { content: '買家名稱'},
    { content: '買家地區'}, // drop
    { content: '支付方式'}, // drop
    
    { content: '運送方式'}, // drop
    { content: '運費', isSorting: true, },
    { content: '總成本', isSorting: true, },
    { content: '總利潤', isSorting: true, },
    { content: '評價', isSorting: true, },
    { content: '評價內容' },
  ],
  cellTypes: [
    'CellText', 'CellText', 'CellDropdown', 'CellText', 'CellText', 
    'CellText', 'CellText', 'CellText', 'CellText', 'CellText',
    'CellText', 'CellText', 'CellText', 'CellDropdown', 'CellDropdown',
    'CellDropdown', 'CellText', 'CellText', 'CellText', 'CellText', 'CellText',
  ],
  data: [
    [ // one row
      { content: '001', longTextLines: 0 }, // 商品編號
      { content: '藍牙耳機', longTextLines: 0 }, // 商品名稱
      { // 商品類別
        defaultValue: 'electronic',
        dropdownContents: [
          { content: '電子產品', value: 'electronic' },
          { content: '家用電器', value: 'appliances' },
          { content: '運動用品', value: 'sport' },
          { content: '服飾', value: 'clothes' },
          { content: '美妝護膚', value: 'beauty' },
          { content: '食品飲料', value: 'food' },
          { content: '玩具遊戲', value: 'game' },
          { content: '健康保健', value: 'health' },
          { content: '寵物用品', value: 'pet' },
        ],
        dropdownName: 'product-category',
        placeholderText: '請選擇商品類別'
      },
      { content: 'XYZ電子公司', longTextLines: 0 }, // 供應商名稱
      { content: '150', longTextLines: 0 }, // 庫存量

      { content: '299.00', longTextLines: 0 }, // 售價
      { content: '10%', longTextLines: 0 }, // 折扣
      { content: '25', longTextLines: 0 }, // 銷售數量
      { content: '6727.50', longTextLines: 0 }, // 總銷售額
      { content: '2024-05-01', longTextLines: 0 }, // 銷售日期

      { content: 'ORD12345', longTextLines: 0 }, // 訂單編號
      { content: '2001', longTextLines: 0 }, // 會員編號
      { content: '王小明', longTextLines: 0 }, // 買家名稱
      { // 買家地區
        defaultValue: 'TPE',
        dropdownContents: [
          { content: '台北市', value: 'TPE' },
          { content: '新北市', value: 'NWT' },
          { content: '桃園市', value: 'TYC' },
          { content: '台中市', value: 'TXG' },
          { content: '台南市', value: 'TNN' },
          { content: '高雄市', value: 'KHH' },
        ],
        dropdownName: 'buyer-location',
        placeholderText: '請選擇買家地區'
      },
      { // 支付方式
        defaultValue: 'credit-card',
        dropdownContents: [
          { content: '信用卡', value: 'credit-card' },
          { content: '行動支付', value: 'mobile-payment' },
          { content: '第三方支付平台', value: 'third-party' },
          { content: '銀行轉帳', value: 'bank-transfer' },
          { content: '貨到付款', value: 'cash-on-delivery' },
          { content: '預付卡/禮品卡', value: 'gift-card' },
        ],
        dropdownName: 'payment-method',
        placeholderText: '請選擇支付方式'
      },

      { // 運送方式
        defaultValue: 'home-delivery',
        dropdownContents: [
          { content: '宅配', value: 'home-delivery' },
          { content: '超商取貨', value: 'conveniencestore-pickup' },
          { content: '自取（到店取貨）', value: 'store-pickup' },
          { content: '郵寄', value: 'send-by-post' },
          { content: '國際配送', value: 'international-delivery' },
          { content: '即時配送（當日送達）', value: 'instant-delivery' },
        ],
        dropdownName: 'deliver-way',
        placeholderText: '請選擇運送方式'
      },
      { content: '100.00', longTextLines: 0 }, // 運費
      { content: '5000.00', longTextLines: 0 }, // 總成本
      { content: '1727.50', longTextLines: 0 }, // 總利潤
      { content: '4.5', longTextLines: 0 }, // 評價
      { content: '音質很好，但有點緊', longTextLines: 3 }, // 評價內容
    ],
  ],
};

export const PromotionManagementList = Template.bind({});
PromotionManagementList.args = {
  columnNum: 19,
  headLabels: [
    { content: '活動編號', isSorting: true, },
    { content: '活動名稱', isSorting: true, },
    { content: '活動類型'}, // drop
    { content: '優惠碼' }, // button
    { content: '折扣百分比', isSorting: true, },

    { content: '折扣金額', isSorting: true, },
    { content: '開始日期', isSorting: true, },
    { content: '結束日期', isSorting: true, },
    { content: '適用商品類別'}, // drop
    { content: '適用商品編號'}, // badge

    { content: '最低消費金額', isSorting: true, },
    { content: '使用次數限制', isSorting: true, },
    { content: '已使用次數', isSorting: true, },
    { content: '活動狀態'}, // badge
    { content: '創建日期', isSorting: true, },
    
    { content: '更新日期', isSorting: true, },
    { content: '創建者 ID', isSorting: true, },
    { content: '創建者名稱', isSorting: true, },
    { content: '備註' },
  ],
  cellTypes: [
    'CellText', 'CellText', 'CellDropdown', 'CellButton', 'CellText', 
    'CellText', 'CellText', 'CellText', 'CellDropdown', 'CellBadge',
    'CellText', 'CellText', 'CellText', 'CellBadge', 'CellText',
    'CellText', 'CellText', 'CellText', 'CellText',
  ],
  data: [
    [ // one row
      { content: '001', longTextLines: 0 }, // 活動編號
      { content: '新會員首單優惠', longTextLines: 0 }, // 活動名稱
      { // 活動類型
        defaultValue: 'first-order',
        dropdownContents: [
          { content: '首單優惠', value: 'first-order' },
          { content: '季節促銷', value: 'season-promotion' },
          { content: '滿額折扣', value: 'full-discount' },
        ],
        dropdownName: 'activity-category',
        placeholderText: '請選擇活動類型'
      },
      { buttonColor: 'gray', content: 'NEWUSER10', iconName: 'MdContentCopy' }, // 優惠碼
      { content: '10%', longTextLines: 0 }, // 折扣百分比

      { content: '-', longTextLines: 0 }, // 折扣金額
      { content: '2024-05-01', longTextLines: 0 }, // 開始日期
      { content: '2024-12-31', longTextLines: 0 }, // 結束日期
      { // 適用商品類別
        defaultValue: 'all',
        dropdownContents: [
          { content: '全部', value: 'all' },
          { content: '電子產品', value: 'electronic' },
          { content: '家用電器', value: 'appliances' },
          { content: '運動用品', value: 'sport' },
          { content: '服飾', value: 'clothes' },
          { content: '美妝護膚', value: 'beauty' },
          { content: '食品飲料', value: 'food' },
          { content: '玩具遊戲', value: 'game' },
          { content: '健康保健', value: 'health' },
          { content: '寵物用品', value: 'pet' },
        ],
        dropdownName: 'product-category',
        placeholderText: '請選擇適用商品類別'
      },
      { content: '001' }, // 適用商品編號

      { content: '0', longTextLines: 0 }, // 最低消費金額
      { content: '1', longTextLines: 0 }, // 使用次數限制
      { content: '150', longTextLines: 0 }, // 已使用次數
      { content: '活動中', badgeColor: 'green' }, // 活動狀態
      { content: '2024-04-20', longTextLines: 0 }, // 創建日期

      { content: '2024-04-20', longTextLines: 0 }, // 更新日期
      { content: 'A001', longTextLines: 0 }, // 創建者ID
      { content: '管理員1', longTextLines: 0 }, // 創建者名稱
      { content: '首次下單可用', longTextLines: 3 }, // 備註
    ],
  ],
};

export const OrderReport = Template.bind({});
OrderReport.args = {
  columnNum: 20,
  headLabels: [
    { content: '訂單編號', isSorting: true, },
    { content: '訂單日期', isSorting: true, },
    { content: '會員編號', isSorting: true, },
    { content: '買家名稱'},
    { content: '買家地區'}, // drop

    { content: '商品編號', isSorting: true, },
    { content: '商品名稱', isSorting: true, },
    { content: '商品類別'}, // drop
    { content: '單價', isSorting: true, },
    { content: '數量', isSorting: true, },

    { content: '總金額', isSorting: true, },
    { content: '支付方式'}, // drop
    { content: '訂單'}, // badge
    { content: '運送方式'}, // drop
    { content: '運費', isSorting: true, },

    { content: '總成本', isSorting: true, },
    { content: '總利潤', isSorting: true, },
    { content: '評價', isSorting: true, },
    { content: '評價內容' },
    { content: '備註' },
  ],
  cellTypes: [
    'CellText', 'CellText', 'CellText', 'CellText', 'CellDropdown', 
    'CellText', 'CellText', 'CellDropdown', 'CellText', 'CellText',
    'CellText', 'CellDropdown', 'CellBadge', 'CellDropdown', 'CellText',
    'CellText', 'CellText', 'CellText', 'CellText', 'CellText',
  ],
  data: [
    [ // one row
      { content: 'ORD1001', longTextLines: 0 }, // 訂單編號
      { content: '2024-05-01', longTextLines: 0 }, // 訂單日期
      { content: '2001', longTextLines: 0 }, // 會員編號
      { content: '王小明', longTextLines: 0 }, // 買家名稱
      { // 買家地區
        defaultValue: 'TPE',
        dropdownContents: [
          { content: '台北市', value: 'TPE' },
          { content: '新北市', value: 'NWT' },
          { content: '桃園市', value: 'TYC' },
          { content: '台中市', value: 'TXG' },
          { content: '台南市', value: 'TNN' },
          { content: '高雄市', value: 'KHH' },
        ],
        dropdownName: 'buyer-location',
        placeholderText: '請選擇買家地區'
      },

      { content: '1001', longTextLines: 0 }, // 商品編號
      { content: '藍牙耳機', longTextLines: 0 }, // 商品名稱
      { // 商品類別
        defaultValue: 'electronic',
        dropdownContents: [
          { content: '電子產品', value: 'electronic' },
          { content: '家用電器', value: 'appliances' },
          { content: '運動用品', value: 'sport' },
          { content: '服飾', value: 'clothes' },
          { content: '美妝護膚', value: 'beauty' },
          { content: '食品飲料', value: 'food' },
          { content: '玩具遊戲', value: 'game' },
          { content: '健康保健', value: 'health' },
          { content: '寵物用品', value: 'pet' },
        ],
        dropdownName: 'product-category',
        placeholderText: '請選擇商品類別'
      },
      { content: '299.00', longTextLines: 0 }, // 單價
      { content: '2', longTextLines: 0 }, // 數量

      { content: '598.00	', longTextLines: 0 }, // 總金額
      { // 支付方式
        defaultValue: 'credit-card',
        dropdownContents: [
          { content: '信用卡', value: 'credit-card' },
          { content: '行動支付', value: 'mobile-payment' },
          { content: '第三方支付平台', value: 'third-party' },
          { content: '銀行轉帳', value: 'bank-transfer' },
          { content: '貨到付款', value: 'cash-on-delivery' },
          { content: '預付卡/禮品卡', value: 'gift-card' },
        ],
        dropdownName: 'payment-method',
        placeholderText: '請選擇支付方式'
      },
      { content: '已完成', badgeColor: 'blue' }, // 訂單狀態
      { // 運送方式
        defaultValue: 'home-delivery',
        dropdownContents: [
          { content: '宅配', value: 'home-delivery' },
          { content: '超商取貨', value: 'conveniencestore-pickup' },
          { content: '自取（到店取貨）', value: 'store-pickup' },
          { content: '郵寄', value: 'send-by-post' },
          { content: '國際配送', value: 'international-delivery' },
          { content: '即時配送（當日送達）', value: 'instant-delivery' },
        ],
        dropdownName: 'deliver-way',
        placeholderText: '請選擇運送方式'
      },
      { content: '100', longTextLines: 0 }, // 運費

      { content: '500.00', longTextLines: 0 }, // 總成本
      { content: '98.00', longTextLines: 0 }, // 總利潤
      { content: '4.5', longTextLines: 0 }, // 評價
      { content: '音質很好，但有點緊', longTextLines: 3 }, // 評價內容
      { content: '', longTextLines: 3 }, // 備註
    ],
  ],
};