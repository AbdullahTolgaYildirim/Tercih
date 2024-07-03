import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap"; // Col ve Row ekledik
import alertify from "alertifyjs/build/alertify";
import Footer from "../Footer/Footer";

const styles = `
.form-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.label {
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.textarea-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.select-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
`;

export default class Iletisim extends Component {
  state = { email: "", password: "", description: "", city: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
  };

  render() {
    return (
      <div>
        <style>{styles}</style>
        <Row>
          <Col sm="6">
            <div
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h2>Hakkımızda</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo et ipsum pulvinar laoreet. Ut elementum arcu eu lacus
                maximus, id venenatis velit vehicula. Nam nec ex sed nunc mollis
                gravida vel in tellus. Duis id convallis nisi. Praesent sed
                lorem in felis iaculis dapibus sit amet non mauris. Sed
                fermentum odio nec sem rutrum, ac aliquet dolor consectetur.
                Fusce quis risus id nulla dictum bibendum ac non nulla. Donec in
                accumsan velit. Nam nec velit a libero mollis rhoncus. Vivamus
                fermentum quam ac orci pellentesque, ut rutrum felis dapibus.
                Quisque faucibus tellus arcu, in varius orci fermentum nec. Duis
                eleifend, justo nec fermentum scelerisque, metus lectus mattis
                lorem, eget varius eros metus nec enim.
              </p>
            </div>
          </Col>
          <Col sm="6">
            <div className="form-container">
              <h1 style={{ textAlign: "center" }}>MOCKINGBIRD</h1>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className="label" for="email">
                    Email
                  </Label>
                  <Input
                    className="input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mail adresi giriniz"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="password">
                    Şifre
                  </Label>
                  <Input
                    className="input-field"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="şifre giriniz"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="description">
                    Görüş ve Öneri
                  </Label>
                  <Input
                    className="textarea-field"
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="görüş ve önerilerilerinizi yazabilirsiniz"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="city">
                    Şehir
                  </Label>
                  <Input
                    className="select-field"
                    type="select"
                    name="city"
                    id="city"
                    onChange={this.handleChange}
                  >
                    <option value="">Bulunduğunuz Şehri Seçiniz</option>
                    <option>Adana</option>
                    <option>Adıyaman</option>
                    <option>Afyonkarahisar</option>
                    <option>Ağrı</option>
                    <option>Amasya</option>
                    <option>Ankara</option>
                    <option>Antalya</option>
                    <option>Artvin</option>
                    <option>Aydın</option>
                    <option>Balıkesir</option>
                    <option>Bilecik</option>
                    <option>Bingöl</option>
                    <option>Bitlis</option>
                    <option>Bolu</option>
                    <option>Burdur</option>
                    <option>Bursa</option>
                    <option>Çanakkale</option>
                    <option>Çankırı</option>
                    <option>Çorum</option>
                    <option>Denizli</option>
                    <option>Diyarbakır</option>
                    <option>Edirne</option>
                    <option>Elazığ</option>
                    <option>Erzincan</option>
                    <option>Erzurum</option>
                    <option>Eskişehir</option>
                    <option>Gaziantep</option>
                    <option>Giresun</option>
                    <option>Gümüşhane</option>
                    <option>Hakkari</option>
                    <option>Hatay</option>
                    <option>Isparta</option>
                    <option>Mersin</option>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Kars</option>
                    <option>Kastamonu</option>
                    <option>Kayseri</option>
                    <option>Kırklareli</option>
                    <option>Kırşehir</option>
                    <option>Kocaeli</option>
                    <option>Konya</option>
                    <option>Kütahya</option>
                    <option>Malatya</option>
                    <option>Manisa</option>
                    <option>Kahramanmaraş</option>
                    <option>Mardin</option>
                    <option>Muğla</option>
                    <option>Muş</option>
                    <option>Nevşehir</option>
                    <option>Niğde</option>
                    <option>Ordu</option>
                    <option>Rize</option>
                    <option>Sakarya</option>
                    <option>Samsun</option>
                    <option>Siirt</option>
                    <option>Sinop</option>
                    <option>Sivas</option>
                    <option>Tekirdağ</option>
                    <option>Tokat</option>
                    <option>Trabzon</option>
                    <option>Tunceli</option>
                    <option>Şanlıurfa</option>
                    <option>Uşak</option>
                    <option>Van</option>
                    <option>Yozgat</option>
                    <option>Zonguldak</option>
                    <option>Aksaray</option>
                    <option>Bayburt</option>
                    <option>Karaman</option>
                    <option>Kırıkkale</option>
                    <option>Batman</option>
                    <option>Şırnak</option>
                    <option>Bartın</option>
                    <option>Ardahan</option>
                    <option>Iğdır</option>
                    <option>Yalova</option>
                    <option>Karabük</option>
                    <option>Kilis</option>
                    <option>Osmaniye</option>
                    <option>Düzce</option>
                  </Input>
                </FormGroup>
                <Button className="button" type="submit">
                  Save
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}