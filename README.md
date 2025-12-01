# YallaCap – Crypto Trading Analysis Terminal

**YallaCap** is a real-time cryptocurrency trading analysis terminal. Track prices, market trends, exchange rates, events, and more in a sleek dashboard interface. Paid features and subscriptions are powered by **Cardano**, providing a seamless crypto-based payment experience. Data is aggregated directly from the **CoinGecko API**.

---

## 🚀 Features

* **Comprehensive Coin Dashboard:** Market stats, community data, developer stats, trending coins, and detailed price charts.
* **Exchanges & Rates:** Live exchange listings and global crypto rates.
* **Events & Status Updates:** Track cryptocurrency events and network status changes.
* **Responsive UI:** Built with **React** and **Ant Design**, fully responsive for desktop and mobile.
* **Paid Features (Cardano Powered):** Subscription-based analytics with Cardano payments (future integration).

---

## 🏗 Project Structure

```
.
├── src
│   ├── API               # Axios setup for CoinGecko API
│   ├── ChartConfig       # Chart.js configuration
│   ├── components        # React components
│   │   ├── Coins         # Coin-related views
│   │   ├── Exchanges     # Exchange listings
│   │   ├── Events        # Event tracking
│   │   ├── Global        # Global market overview
│   │   ├── Navigation    # Header, Footer, Sidebar
│   │   └── ...           # Other UI components
│   ├── redux_actions     # Redux actions
│   ├── redux_reducers    # Redux reducers
│   └── styles            # CSS/JS style definitions
├── public                # Static files, favicon, manifest
├── package.json          # Dependencies
└── README.md             # Project documentation
```

---

## ⚙️ Tech Stack

* **Front-end:** React, React Router, Ant Design UI
* **Data API:** CoinGecko API (v3)
* **Charts:** Chart.js
* **State Management:** Redux (optional, for large-scale state handling)
* **HTTP Requests:** Axios

---

## 💻 Installation & Local Setup

```bash
# Clone the repo
git clone https://github.com/TangentADA/DataMarket.git

# Use Node version manager
nvm use

# Install dependencies
yarn

# Start local development server
yarn start

# Build production version
yarn build
```

* Open your browser at `http://localhost:3000` to view the app locally.

---

## 🌐 Live Demo

Check out the live deployment: [YallaCap](https://www.yallacap.com/#/asset-platforms)

---

## 📄 Meta Information / SEO

* Title: **YallaCap – Crypto Trading Analysis Terminal**
* Description: *“YallaCap is a crypto trading analysis terminal. Track cryptocurrency prices, trends, and global market data in real time. Paid features powered by Cardano.”*
* Social Sharing: Open Graph & Twitter cards are preconfigured with logo and description.

---

## 📝 To Do / Future Enhancements

* [x] Add total market information
* [x] Search UI alignment & functionality
* [x] Move coin details to full page view
* [x] Refactor codebase and webpage structure
* [x] Add Home / Dashboard / About pages
* [ ] Login/signup authentication
* [ ] Watchlist
* [ ] Paid subscription integration via Cardano

---

## 📚 Sources & References

* [CoinGecko API](https://www.coingecko.com/en/api#)
* [React Documentation](https://reactjs.org/docs/getting-started.html)
* [Ant Design Documentation](https://ant.design/docs/react/introduce)




