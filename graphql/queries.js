import { gql } from '@apollo/client'

const GET_HOME_DATAS = gql`
query {
  sliderBanner {
    data {
      id
      attributes {
        Images {
          data {
            id
            attributes {
              url
              formats
            }
          }
        }
      }
    }
  }
  categories(filters: {show_in_home: {eq: true}}, pagination: {pageSize: 6}){
    data{
      id,
      attributes{
        categoryName,
        slug,
        featureImage{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;
function GET_CATERGORY_PHOTOS(slug){ 
  return(
    gql`
    query {
      categories(filters: {slug: {eq: "${slug}"}}){
        data{
          attributes{
            categoryName
            events{
              data{
                attributes{
                  tittle
                  eventPhotos{
                    data{
                      attributes{
                        url
                        width
                        height
                        formats
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  )
};

const GET_CATEGORIES_DATA = gql`
query {
  categories(filters: {show_in_home: {eq: true}}, pagination: {pageSize: 6}){
    data{
      id,
      attributes{
        categoryName,
        slug,
        featureImage{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

function GET_EVENTS_DATA(slug){ 
  return(
    gql`
    query {
      categories(filters: {slug: {eq: "${slug}"}}){
        data{
          attributes{
            categoryName
          }
        }
      }
        events(filters: {categories: {slug: {eq: "${slug}"}}}){
          data{
            attributes{
              
              tittle
              eventDate
              slug
              featureImage{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }`
  )
};


function GET_EVENT_PHOTOS(slug){ 
  return(
    gql`
    query {
      categories(filters: {slug: {eq: "${slug}"}}){
        data{
          attributes{
            categoryName
            events{
              data{
                attributes{
                  tittle
                  eventPhotos{
                    data{
                      attributes{
                        url
                        width
                        height
                        formats
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  )
};

export { GET_HOME_DATAS, GET_CATEGORIES_DATA, GET_CATERGORY_PHOTOS, GET_EVENTS_DATA, GET_EVENT_PHOTOS }