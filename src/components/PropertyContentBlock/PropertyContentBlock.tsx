'use client';

import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Property } from '@/models/property';

import styles from "./PropertyContentBlock.module.scss"

interface PropertyContentBlockProps {
  property: Property;
}

const PropertyContentBlock: React.FC<PropertyContentBlockProps> = ({ property }) => {
  const [isTextExpanded, setTextExpanded] = useState<boolean>(false);

  return (
    <div>
      <div style={{ maxHeight: isTextExpanded ? 'none' : '200px', overflow: 'hidden' }}>
        <PortableText value={property?.body} />
      </div>
      {/* Кнопка для раскрытия/скрытия текста */}
      <button className={styles.showMoreButton} onClick={() => setTextExpanded(!isTextExpanded)}>
        {isTextExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
      </button>
    </div>
  );
};

export default PropertyContentBlock;