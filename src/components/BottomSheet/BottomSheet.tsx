import React, {useEffect, useRef} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

import {ActionButton} from '@/components';
import tw from '@/tw';

type Props = {
  showBottomSheet: boolean;
  setShowBottomSheet: (arg0: boolean) => void;
  children: React.ReactNode;
  onClose?: () => void;
};

export const BottomSheet = ({
  showBottomSheet,
  setShowBottomSheet,
  onClose,
  children,
}: Props) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const hideActionSheet = () => {
    if (actionSheetRef.current?.isOpen()) {
      actionSheetRef.current?.hide();
    }
  };

  const showActionSheet = () => {
    if (!actionSheetRef.current?.isOpen()) {
      actionSheetRef.current?.show();
    }
  };

  useEffect(() => {
    if (showBottomSheet) {
      showActionSheet();
    } else {
      hideActionSheet();
    }
    return () => {};
  }, [showBottomSheet]);

  return (
    <ActionSheet
      ref={actionSheetRef}
      closeOnTouchBackdrop
      gestureEnabled={true}
      indicatorStyle={tw`mt-[5%] mb-[5%] w-[20%] h-1 rounded-full self-center bg-gray`}
      containerStyle={tw.style(` w-fullW   px-6 rounded-t-5 pb-[15%]`)}
      elevation={0}
      onClose={() => {
        if (onClose) {
          onClose();
        }
        showBottomSheet && setShowBottomSheet(false);
      }}>
      {children}
    </ActionSheet>
  );
};
