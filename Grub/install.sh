#!/bin/bash

# Check if install script/theme directory is in right location.
if [ -d "autumn-breeze" ]; then

    sudo rm -r /boot/grub/themes/autumn-breeze
    sudo cp -r $PWD/autumn-breeze /boot/grub/themes/

    cp /etc/default/grub /tmp/grub
    sed -i '/GRUB_THEME/c\GRUB_THEME=/boot/grub/themes/autumn-breeze/theme.txt' /tmp/grub

    sudo mv -f /tmp/grub /etc/default/grub

fi
