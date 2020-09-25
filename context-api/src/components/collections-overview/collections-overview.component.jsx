import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

import { selectCollectionsForPreview } from "../../contexts/collections/collection.context";

const CollectionsOverview = () => {
  const collections = selectCollectionsForPreview();

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
export default CollectionsOverview;
