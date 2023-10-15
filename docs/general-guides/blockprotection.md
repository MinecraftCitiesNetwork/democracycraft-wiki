---
sidebar_position: 7
---

# Block Protection

DemocracyCraft features a simple block protection plugin to protect all your valuable goods. Take a few minutes to read this guide so you know how to best protect your loot!

## Commands

### Lock
Usage: ``/bolt lock [type] (alias: /lock [type])``
Description: Lock something. Optionally provide a protection type to lock with (defaults to private).

### Unlock
Usage: ``/bolt unlock (alias: /unlock)``
Description: Unlock something.

### Edit
Usage: ``/bolt edit (add|remove) <player>``
Description: Edit a protection to add or remove a player's access.

### Modify
Usage: ``/bolt modify (add|remove) <access> <source-type> <sources...>``
Description: Add or remove sources with given access to a protection's access list (ACL).

### Group
Usage: ``/bolt group (create|delete|add|remove|list) <group> [players...]``
Description: Manage custom player groups, which can be used in access lists (ACLs).

### Trust
Usage: ``/bolt trust [list|confirm|add|remove] [player]``
Description: Prompt, list, or confirm changes to your trust access list.

### Transfer
Usage: ``/bolt transfer <player>``
Description: Transfer a protection that you own to another player.

### Password
Usage: ``/bolt password <password>``
Description: Enter a password for a protection that has a password source added.

### Mode
Usage: ``/bolt mode <mode>``
Description: Toggle a player mode. For example: persist, no lock, no spam.

:::info Example
``/bolt persist`` - Toggles persistent mode which let you perform your last action (command) on all blocks you left click without needing to re-type the command. Run this command again to toggle this mode off.
``/bolt nolock`` - Toggles nolock mode which lets you place down all blocks without any of them locking by default. Run this command again to toggle this mode off.
``/bolt nospam`` - Toggles nospam mode which reduces messages that you see in game, such as when you interact with a protection it will no longer say who it is protected by in chat (including your own protections). Run this command again to toggle this mode off.
:::

### Help
Usage: ``/bolt help [command]``
Description: Displays help.

### Info
Usage: ``/bolt info``
Description: Display protection information.

## What Can I Protect?
You can protect the following:

- Chests
- Barrels
- Furnaces
- Lecterns
- Buttons
- ChestShop

## Container Guarentee
Any container that is stolen from in a regioned area (i.e. Wild or Urban) is covered by this staff guarantee. Staff will recover the items and investigate those who stole from the container. The container does not have to be locked, however, we strongly recommend you lock your containers to prevent this from occurring. If your chest is siphoned with a hopper or stolen from by someone with permissions to the chest, it will also be investigated and covered by the guarantee.

## Conclusion
Hopefully this guide has helped you navigate the fun world of block protection! If you have any questions, join our Discord Server, we'll be more than happy to help you there!
