import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResults from '../components/query-result';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const renderTracks = (tracksData) => {
  return tracksData?.map((trackObj) => {
    return <TrackCard key={trackObj.id} track={trackObj} />;
  });
}
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {

  const { loading, error, data } = useQuery(TRACKS);
  


  return (
    <Layout grid>
      <QueryResults error={error} loading={loading} data={data}>
        {renderTracks(data?.tracksForHome)}
      </QueryResults>
    </Layout>
  );
};


export default Tracks;
