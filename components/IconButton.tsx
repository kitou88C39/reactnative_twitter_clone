type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={styles.footer}>
      <View>
        <EvilIcons name={icon} size={220} color='gray' />
        <Text style={{ fontSize: 12, color: 'gray' }}>{text}</Text>
      </View>
    </View>
  );
};
