require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json([
        {
            id: "1",
            title: "First Block",
            images: [
                "https://tse3.mm.bing.net/th?id=OIP.Pz41etqzp1j7tlMIA-zJ0gAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse4.mm.bing.net/th?id=OIP.6iHFHI7VYpaHw_7qeAFfWgAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse4.mm.bing.net/th?id=OIP.AV4oMtMGzql-Obk2hZlDAgAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse3.mm.bing.net/th?id=OIP.jZyWU5JFXRI2qCuFIKTajQAAAA&pid=Api&P=0&w=300&h=300",
            ],
        },
        {
            id: "2",
            title: "Second Block",
            images: [
                "https://tse2.mm.bing.net/th?id=OIP.B6T7986kOW3SSO0uaASZKQAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse1.mm.bing.net/th?id=OIP.pUDSf8l2UZqYVmPPxjWHfwAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse4.mm.bing.net/th?id=OIP.fOG8huu2ze1pUU0sEKUFPAAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse1.mm.bing.net/th?id=OIP.2GTck42y6oxtuVfUboWcQgAAAA&pid=Api&P=0&w=300&h=300",
            ],
        },
        {
            id: "3",
            title: "Third Block",
            images: [
                "https://tse4.mm.bing.net/th?id=OIP.r0AqxkvhFON8AIeNedZSpAHaLH&pid=Api&P=0&w=300&h=300",
                "https://tse1.mm.bing.net/th?id=OIP.cAHvwohYBta6G5EBt5vI3AHaLH&pid=Api&P=0&w=300&h=300",
                "https://tse1.mm.bing.net/th?id=OIP.cK7Tltftg8L2OzCh19EQcQAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse2.mm.bing.net/th?id=OIP.ua6dVtxoMSLiRZg6JARFhgAAAA&pid=Api&P=0&w=300&h=300",
            ],
        },
        {
            id: "4",
            title: "Fourth Block",
            images: [
                "https://tse4.mm.bing.net/th?id=OIP.vV9s3mv6vzSzURf0FjP-oAAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse2.mm.bing.net/th?id=OIP.zo7umC7bW7SiGttb8eMmjwAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse2.mm.bing.net/th?id=OIP.ua6dVtxoMSLiRZg6JARFhgAAAA&pid=Api&P=0&w=300&h=300",
                "https://tse3.mm.bing.net/th?id=OIP.jZyWU5JFXRI2qCuFIKTajQAAAA&pid=Api&P=0&w=300&h=300",
            ],
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
