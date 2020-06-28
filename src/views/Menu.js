import React from 'react';
import { Card, CardBody, CardTitle, Row, Col,Button } from "reactstrap";

/* eslint-disable */

let data = {
  "restaurant": {
    "id": "1",
    "name": "Restoran",
    "active_menu": {
      "id": "1",
      "menu_name": "Kahvaltı Menüsü",
      "menu": {
        "id": "1",
        "sections": [
          "Kaseler",
          "Pancakes",
          "Yumurtalar",
          "Tostlar",
          "İçecekler"
        ],
        "item_order": [
          {
            "section": "Kaseler",
            "items": [
              "item-1",
              "item-2"
            ]
          },
          {
            "section": "Pancakes",
            "items": [
              "item-3",
              "item-4"
            ]
          },
          {
            "section": "Yumurtalar",
            "items": [
              "item-5",
              "item-6"
            ]
          },
          {
            "section": "Tostlar",
            "items": [
              "item-7",
              "item-8",
              "item-9"
            ]
          },
          {
            "section": "İçecekler",
            "items": [
              "item-10",
              "item-11",
              "item-12",
              "item-13"
            ]
          }
        ],
        "items": [
          {
            "id": "item-1",
            "section": "Kaseler",
            "promotion": "33.00",
            "item": {
              "name": "Granola Bowl",
              "price": "39.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Granola",
                "Yogurt",
                "Yaban Mersini"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_100x100.jpg"
                }
            }
          },
          {
            "id": "item-2",
            "section": "Kaseler",
            "item": {
              "name": "Smoothie Bowl",
              "price": "39.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Chia tohumu",
                "Muz"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-3",
            "section": "Pancakes",
            "item": {
              "name": "Nutella Strawberry Pancake",
              "price": "40.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Krep içerisinde sotelenmiş dana jambon",
                "tavuk jambon",
                "mantar",
                "Hardallı soslu"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-4",
            "section": "Pancakes",
            "item": {
              "name": "Berry Pancake",
              "price": "37.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Yaban mersini"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-5",
            "section": "Yumurtalar",
            "item": {
              "name": "Sucuklu Yumurta",
              "price": "42.00",
              "dietary_info": [
                "SPICY"
              ],
              "ingredients": [],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-6",
            "section": "Yumurtalar",
            "item": {
              "name": "Menemen",
              "price": "41.00",
              "dietary_info": [],
              "ingredients": [
                "Domates",
                "Biber",
                "Soğan",
                "Köy yumurta"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-7",
            "section": "Tostlar",
            "item": {
              "name": "Avocado Toast",
              "price": "41.00",
              "dietary_info": [],
              "ingredients": [
                "Ezilmiş avocado"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-8",
            "section": "Tostlar",
            "promotion": "30.00",
            "item": {
              "name": "French Toast",
              "price": "35.00",
              "dietary_info": [],
              "ingredients": [
                "Mapple syrup",
                "Bal"
              ],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-9",
            "section": "Tostlar",
            "item": {
              "name": "Kızarmış Ekmek üstünde Çırpılmış Yumurta",
              "price": "41.00",
              "dietary_info": [
                "VEGETARIAN"
              ],
              "ingredients": [],
              "images": 
                {
                  "abc": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_100x100.jpg"
                }
              
            }
          },
          {
            "id": "item-10",
            "section": "İçecekler",
            "item": {
              "name": "Nar Suyu",
              "price": "18.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          },
          {
            "id": "item-11",
            "section": "İçecekler",
            "item": {
              "name": "Taze Sıkılmış Portakal Suyu",
              "price": "15.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          },
          {
            "id": "item-12",
            "section": "İçecekler",
            "item": {
              "name": "English Breakfast Tea",
              "price": "6.00",
              "dietary_info": [],
              "ingredients": [
              ],
              "images": []
            }
          },
          {
            "id": "item-13",
            "section": "İçecekler",
            "item": {
              "name": "Earl Grey Tea",
              "price": "6.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          }
        ]
      }
    }
  }
};  




class Tables extends React.Component {
  constructor() {
    super();
    this.state = {
      favarray: [],
      useFav: [],
      search:null,
      origidata: [],
      listgrid: 1,
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }


  AddToFavorite(items){
    console.log(items)
    this.state.favarray.push(items)
    this.state.favorite=true
    this.setState({
      useFav: this.state.favarray
    });
  };

  removeFavorite(items) {
    var ax;
    while ((ax= this.state.favarray.indexOf(items)) !== -1) {
      this.state.favarray.splice(ax, 1);
    }
    this.setState({
      useFav: this.state.favarray
    });
}

  ClickList(){
    this.setState({
      listgrid: 1
    });
  }

  ClickGrid(){
    this.setState({
      listgrid: 2
    });
  }

  getData(){
    this.setState({
      origidata: data.restaurant.active_menu.menu.items
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {

    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      height:'5vh',
      width:'30vh',
      marginBottom:20,
    }
    const fav = this.state.useFav.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.item.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div  style={{marginTop:10}}>
                    <Card className="bg-light card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="h2 font-weight-bold mb-0"
                            >
                              {data.item.name}
                            </CardTitle>
                            <CardTitle
                              tag="h5"
                              className="text-muted mb-0"
                            >
                              {data.item.ingredients.map((m) => ( 
                                <span className=" text-muted mb-0" >
                                  {m} <br/>
                                </span>
                              ))}
                            </CardTitle>
                          </div>
                          <Col className="col-auto">
                            <div >
                              <img
                                alt="No Image" 
                                src= {data.item.images.abc}
                                width="100" height="100"  />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div className="col">
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="font-weight-bold mr-2">
                                {data.item.price} 
                              </span>
                            </p>
                          </div>
                            <Col className="col-auto">
                              <div >
                                <Button class="btn" onClick={() =>
                                          this.removeFavorite(data)} >
                                  Favorilerde
                                </Button>
                                <img
                                  alt="..." 
                                  src= "https://github.com/picmeco/code-challenge-react/blob/master/public/images/heart.png?raw=true"
                                  width="20" height="20"  />
                              </div>
                            </Col>
                        </Row>
                      </CardBody>
                    </Card>
      </div>
      )
    })
    const items = this.state.origidata.filter((data)=>{
      if(this.state.search == null)
        return data
      else if(data.item.name.toLowerCase().includes(this.state.search.toLowerCase())){
        return data
      } 
    }).map(data=>{
        return(
          <div style={{marginTop:10}}>
                        <Card className="bg-light card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="h2 font-weight-bold mb-0"
                                >
                                  {data.item.name}
                                </CardTitle>
                                <CardTitle
                                  tag="h5"
                                  className="text-muted mb-0"
                                >
                                  {data.item.ingredients.map((m) => ( 
                                    <span className=" text-muted mb-0" >
                                      {m} <br/>
                                    </span>
                                  ))}
                                </CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div >
                                  <img
                                    alt="No Image" 
                                    src= {data.item.images.abc}
                                    width="100" height="100"  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <div className="col">
                                <p className="mt-3 mb-0 text-muted text-sm">
                                  <span className="font-weight-bold mr-2">
                                    {data.item.price} 
                                  </span>
                                </p>
                              </div>
                             
                                <Col className="col-auto">
                                  <div >
                                      <Button 
                                        onClick={() =>
                                          this.AddToFavorite(data)}                                     
                                      >
                                        Favorilere Ekle
                                      </Button>
                                    <img
                                      alt="..." 
                                      src= "https://github.com/picmeco/code-challenge-react/blob/master/public/images/heart.png?raw=true"
                                      width="20" height="20"  />
                                  </div>
                                </Col> 
                            </Row>
                          </CardBody>
                        </Card>
                      
          </div>
          )
      }
    )
    const griditems = data.restaurant.active_menu.menu.items.map(data=>{
      return(
        
                  <Col style={{marginTop:10}}> 
                    <Card className="bg-light card-stats ">
                      <CardBody>
                        <Row>
                        <Col className="col-auto">
                            <div >
                              <img
                                alt="No Image" 
                                src= {data.item.images.abc}
                                width="100" height="100"  />
                            </div>
                          </Col>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="h2 font-weight-bold mb-0"
                            >
                              {data.item.name}
                            </CardTitle>
                          </div>
                        </Row>
                      </CardBody>
                    </Card>
                    </Col>
                    
      )
    })
    return (
      <>
       <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
            <div className="header-body">
              <Row>
                <div class="container" style={{marginBottom:20}}>
                  <div class="row">
                    <div class="col text-center">
                      <button class="btn btn-default" onClick={()=>this.ClickList()} >List</button>
                      <button class="btn btn-default" onClick={()=>this.ClickGrid()}>Grid</button>
                    </div>
                  </div>
                </div>
                <Col  >
                  <Card className="card-stats mb-4  mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="h2 font-weight-bold mb-0 text-uppercase"
                          >
                            {data.restaurant.name} 
                          </CardTitle>
                          <CardTitle
                            tag="h5"
                            className="h2 text-muted mb-0 text-uppercase"
                          >
                            {data.restaurant.active_menu.menu_name} 
                          </CardTitle>
                        </div>
                      </Row>
                      <Row>
                    {this.state.listgrid===1 ? 
                    <div >
                      <div class="col text-center" style={{marginTop:20}}>
                        <input type="text" placeholder="Yemek Adına Göre" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
                      </div>
                      {fav}
                      {items}  
                    </div> :
                    <div class="row">
                      {griditems}
                    </div>
                   }
                    </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
        </div>
      </>
    );
  }
}

export default Tables;


