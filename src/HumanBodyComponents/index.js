import './SearchBar.css';
import React, { useState } from 'react';
import { Select } from 'antd';
import FemaleSVG from '../SVGs/FemaleSVG';
import MaleSVG from '../SVGs/MaleSVG';

function HumanBodyComponents() {
  const [organsArray, setOrgansArray] = useState([]);
  const handleChange = (value) => {
    setOrgansArray([value]);
  };
  return (
    <div className="human-body-main">
      <div className="search-bar">
        <Select
          showSearch
          placeholder="Search organ to highlight"
          optionFilterProp="label"
          onChange={handleChange}
          filterSort={(optionA, optionB) => (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())}
          options={[
            { value: 'brain', label: 'Brain' },
            { value: 'cerebral cortex', label: 'Cerebral Cortex' },
            { value: 'heart', label: 'Heart' },
            { value: 'breast', label: 'Breast' },
            { value: 'adrenal gland', label: 'Adrenal Gland' },
            { value: 'lymph node', label: 'Lymph Node' },
            { value: 'hippocampus', label: 'Hippocampus' },
            { value: 'tongue', label: 'Tongue' },
            { value: 'seminal vesicle', label: 'Seminal Vesicle' },
            { value: 'testis', label: 'Testis' },
            { value: 'epididymis', label: 'Epididymis' },
            { value: 'eye', label: 'Eye' },
            { value: 'lung', label: 'Lung' },
            { value: 'spinal cord', label: 'Spinal Cord' },
            { value: 'amygdala', label: 'Amygdala' },
            { value: 'stomach', label: 'Stomach' },
            { value: 'spleen', label: 'Spleen' },
            { value: 'duodenum', label: 'Duodenum' },
            { value: 'gall bladder', label: 'Gall Bladder' },
            { value: 'pancreas', label: 'Pancreas' },
            { value: 'colon', label: 'Colon' },
            { value: 'small intestine', label: 'Small Intestine' },
            { value: 'liver', label: 'Liver' },
            { value: 'urinary bladder', label: 'Urinary Bladder' },
            { value: 'prostate gland', label: 'Prostate Gland' },
            { value: 'esophagus', label: 'Esophagus' },
            { value: 'ovary', label: 'Ovary' },
            { value: 'bladder', label: 'Bladder' },
            { value: 'endometrium', label: 'Endometrium' },
            { value: 'fallopian tube', label: 'Fallopian Tube' },
            { value: 'uterine cervix', label: 'Uterine Cervix' },
            { value: 'vagina', label: 'Vagina' },
            { value: 'retina', label: 'Retina' },
            { value: 'kidney', label: 'Kidney' },
            { value: 'thyroid gland', label: 'Thyroid Gland' },
          ]}
        />
      </div>
      <div className="human-body">
        <div className="svg-container">
          <FemaleSVG organsArray={organsArray} />
          <div className="svg-title">Female Body</div>
        </div>
        <div className="svg-container">
          <MaleSVG organsArray={organsArray} />
          <div className="svg-title">Male Body</div>
        </div>
      </div>
    </div>
  );
}

export default HumanBodyComponents;
