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
            }
          }
        }
      }
    }
  }
  categories{
    data{
      id,
      attributes{
        categoryName,
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
function GET_CATERGORY_PHOTOS(category){ 
  return(
    gql`
    query {
      categories(filters:{categoryName: {eq: "${category}"}}){
        data{
          attributes{
            categoryName,
            events{
              data{
                attributes{
                  eventPhotos{
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
        }
      }
    }`
  )
};

export { GET_HOME_DATAS, GET_CATERGORY_PHOTOS }