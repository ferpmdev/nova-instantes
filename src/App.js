import "./App.css";
import InstagramEmbed from "react-instagram-embed";

function App() {
  return (
    <div className="App">
      <h1>holaaa</h1>
      <InstagramEmbed
        url="https://www.instagram.com/p/CSzxv-KlN68/?utm_source=ig_web_copy_link"
        clientAccessToken="282819320316529|4b3631c2b3f1ff82d041be11fd806d0d"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default App;

// const paso1 = 'https://api.instagram.com/oauth/authorize?client_id=282819320316529&redirect_uri=https://nova-instantes2.herokuapp.com/&scope=user_profile,user_media&response_type=code'
// te devuelve este code
// AQD41FvO6l7_8qdCSYQum7p6I5sV68Xx-NILLKRVFG0xY3849354-aLKATxa6hxT_uNOpbWZeUyrqVYZ9T4QKcgp0LI4mA-53F2vizaezegDMw-ysr-zyyhpmO8zsX9UtisBYY19pR17iIRDYOoDOjMWQ4ozrekJT9fohJbeXuaFn-QMzesbDVCqrq617A8B-IPDj_IrJN2gO_2Pm3EDgKbhgfiKy1iHEIxWXfvuCAv71Q#_

// AQDMrDekdlCCbBBfeYdK_mP1YuZOPosNEOPn_haSOLmxB0dfxcCc_FvlZwIEmOHbKsCKBEy5ZpntGhAHCE44a6PHx1BDlATKAQdqPYnwqpJiG7Tru4dGRcG_177q63QRRCArCslOU0XNv53I5FAYQRwrXF95EBvAAEnzgGdM10FepZfphwNuqLVQYXC7a_ZM6Y6Wy-qw4n5VAF8wgLjTgnRVMYKxRk3u07TchHtgHroFBA
