import React, { ReactNode } from "react";

export interface CardModel {
  modelName: string;
  overLayNoed: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CardModel[];
  registerModel: (model: CardModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CardModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
