import { gql } from "@apollo/client";

export const GET_LATEST_LAUNCH = gql`
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
`;

export const GET_LAUNCHES = gql`
  query Launches {
    launches(limit: 25, sort: "desc") {
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
`;
