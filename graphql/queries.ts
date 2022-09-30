import { gql, useQuery } from '@apollo/client'

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
  portfolios(
    filters: { show_in_home: { eq: true } }
    pagination: { pageSize: 6 }
  ) {
    data {
      attributes {
        portfolioName
        slug
        featureImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  events(pagination: {pageSize: 4}){
    data{
      attributes{
        
        categories{
          data{
            attributes{
              categoryName
            }
          }
        }
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

function GET_PORTFOLIO_PHOTOS(slug) {
  return(
    gql`
      query {
        portfolios(filters: {slug: {eq: "${slug}"}}){
          data{
            attributes{
              portfolioName
              featureImage{
                data{
                  attributes{
                    url
                  }
                }
              }
              portfolioGallery{
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
}

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

const GET_SINGLE_EVENT = gql`
  query{
    events(filters: {slug: {eq: $slug}}){
      data{
        id
        attributes{
          tittle
          description
          eventDate
          eventPlace
        }
      }
    }
  }`

export const GET_EVENT_GALLERY = gql`
  query($limit: Int, $id: Int) {
    event(id: $id) {
      data {
        attributes { 
          eventPhotos(pagination: { start: 0, limit: $limit }) {
            data {
              attributes {
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
  }`

  type Maybe<T> = T | null;

  export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
  };

  export type GalleryQueryVariables = {
    cursor?: Maybe<Scalars["String"]>;
    first: Scalars["Int"];
  };

  export function useGalleryQuery(
    baseOptions
    ) {
    return useQuery(
      GET_EVENT_GALLERY, {
      baseOptions,
    });
  }


export { GET_HOME_DATAS, GET_CATEGORIES_DATA, GET_CATERGORY_PHOTOS, GET_EVENTS_DATA, GET_SINGLE_EVENT, GET_PORTFOLIO_PHOTOS}