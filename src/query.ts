import { gql } from "./__generated__/gql";


export const GET_LATEST_LAUNCH = gql(`
  query launchLatest {
    launchLatest {
      mission_name
      id
      launch_date_utc
      rocket {
        rocket_type
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`);

export const GET_LAUNCHES = gql(`
  query Launches {
    launches {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_date_utc
      links {
        video_link
      }
      id
    }
  }
`);


export const GET_LAUNCH = gql(`
query GetLaunch($launchId: ID!) {
  launch(id: $launchId) {
    id
    launch_date_utc
    launch_site {
      site_name
    }
    launch_success
    links {
      video_link
      wikipedia
      article_link
      flickr_images
    }
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    ships {
      name
    }
  }
}
`)