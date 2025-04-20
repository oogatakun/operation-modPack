Entity Loot Drops - Configuration Guide
=====================================

This mod allows you to customize what items drop from mobs, with powerful features like conditional drops, commands, and special effects.

Quick Start:
-----------
1. All configuration is done through JSON files
2. Files are organized in folders for normal drops and event drops
3. Use /lootdrops commands to control events in-game

1. Directory Structure
----------------------
config/entitylootdrops/
|-- Normal/                  # Regular drops (always active)
|   |-- Global_Hostile_Drops.json   # Drops for all hostile mobs
|   `-- Mobs/                # Entity-specific drops
|       |-- zombie_drops.json
|       |-- skeleton_drops.json
|       `-- ...
|-- Event Drops/                  # Event-specific drops
    |-- Winter/              # Winter event drops
    |   |-- hostile_drops.json
    |   `-- Mobs/
    |       |-- skeleton_ice.json
    |       `-- ...
    |-- Summer/              # Summer event drops
    |-- Easter/              # Easter event drops
    |-- Halloween/           # Halloween event drops
    `-- [custom event]/      # Custom event drops (create your own folder)

2. Drop Configuration Format
-------------------------
All drop configurations use JSON format. Here's a detailed breakdown:

Basic Properties:
- "_comment": "Comment for this drop configuration (e.g., "zombie drops diamonds")
- itemId: The Minecraft item ID (e.g., "minecraft:diamond")
- dropChance: Percentage chance to drop (0-100)
- minAmount: Minimum number of items to drop
- maxAmount: Maximum number of items to drop

Advanced Properties:
- nbtData: Custom NBT data for the item
- command: Command to execute when the mob dies
- commandChance: Chance for the command to execute (0-100)
- requiredAdvancement: Player must have this advancement
- requiredEffect: Player must have this potion effect
- requiredEquipment: Player must have this item equipped
- requiredDimension: Player must be in this dimension (e.g., "minecraft:overworld")

3. Example Configurations
----------------------

A. Basic Hostile Drop:
```json
{
    "_comment": "Simple diamond drop with 5% chance",
    "itemId": "minecraft:diamond",
    "dropChance": 5.0,
    "minAmount": 1,
    "maxAmount": 2
}
```

B. Advanced Item Drop with NBT:
```json
{
    "_comment": "Named sword with enchantments",
    "itemId": "minecraft:diamond_sword",
    "dropChance": 10.0,
    "minAmount": 1,
    "maxAmount": 1,
    "nbtData": "{display:{Name:'{\"text\":\"Legendary Blade\",\"color\":\"gold\"}',Lore:['{\"text\":\"Ancient power flows through this weapon\",\"color\":\"purple\"}']},Enchantments:[{id:\"minecraft:sharpness\",lvl:5},{id:\"minecraft:looting\",lvl:3}]}"
}
```

C. Conditional Drop with Command:
```json
{
    "_comment": "Special drop for advanced players",
    "itemId": "minecraft:netherite_ingot",
    "dropChance": 15.0,
    "minAmount": 1,
    "maxAmount": 1,
    "requiredAdvancement": "minecraft:story/enter_the_nether",
    "requiredEquipment": "minecraft:diamond_sword",
    "command": "title {player} title {\"text\":\"Legendary Find!\",\"color\":\"gold\"}",
    "commandChance": 100.0
}
```

Complete example showing all available options:
```json
{
    "_comment": "Example configuration showing all available options",
    "entityId": "minecraft:zombie",
    "itemId": "minecraft:diamond_sword",
    "dropChance": 10.0,
    "minAmount": 1,
    "maxAmount": 3,
    "nbtData": "{display:{Name:'{\"text\":\"Ultimate Sword\",\"color\":\"gold\"}',Lore:['{\"text\":\"A powerful weapon\",\"color\":\"purple\"}']},Enchantments:[{id:\"minecraft:sharpness\",lvl:5},{id:\"minecraft:looting\",lvl:3}]}",
    "requiredAdvancement": "minecraft:story/enter_the_nether",
    "requiredEffect": "minecraft:strength",
    "requiredEquipment": "minecraft:diamond_pickaxe",
    "requiredDimension": "minecraft:overworld",
    "command": "title {player} title {\"text\":\"Epic Kill!\",\"color\":\"gold\"}",
    "commandChance": 100.0
}
```

4. Command Placeholders
--------------------
Use these in your commands to reference specific values:

Player Related:
- {player}    : Player's name
- {player_x}  : Player's X coordinate
- {player_y}  : Player's Y coordinate
- {player_z}  : Player's Z coordinate

Entity Related:
- {entity}    : Killed entity's name
- {entity_id} : Entity's Minecraft ID
- {entity_x}  : Entity's X coordinate
- {entity_y}  : Entity's Y coordinate
- {entity_z}  : Entity's Z coordinate

5. Requirements System
-------------------

A. Advancements:
Use "requiredAdvancement" to check if a player has completed specific advancements:
```json
"requiredAdvancement": "minecraft:story/mine_diamond"  // Must have mined diamonds
"requiredAdvancement": "minecraft:nether/create_beacon"  // Must have created a beacon
```

B. Potion Effects:
Use "requiredEffect" to check if a player has active effects:
```json
"requiredEffect": "minecraft:strength"  // Must have Strength effect
"requiredEffect": "minecraft:invisibility"  // Must be invisible
```

C. Equipment:
Use "requiredEquipment" to check what the player is holding:
```json
"requiredEquipment": "minecraft:diamond_sword"  // Must hold diamond sword
"requiredEquipment": "minecraft:bow"  // Must hold a bow
```

D. Dimensions:
Use "requiredDimension" to check which dimension the player is in:
```json
"requiredDimension": "minecraft:overworld"  // Must be in the overworld
"requiredDimension": "minecraft:the_nether"  // Must be in the nether
"requiredDimension": "minecraft:the_end"  // Must be in the end
"requiredDimension": "mymod:custom_dimension"  // Must be in a custom dimension
```

6. Command Examples
----------------

A. Effects and Sounds:
```json
"command": "effect give {player} minecraft:regeneration 10 1"  // Give regeneration
"command": "playsound minecraft:entity.experience_orb.pickup master {player}"  // Play sound
```

B. Visual Effects:
```json
"command": "particle minecraft:heart {entity_x} {entity_y} {entity_z} 1 1 1 0.1 20"  // Heart particles
"command": "title {player} actionbar {\"text\":\"Epic kill!\",\"color\":\"gold\"}"  // Show message
```

C. Complex Commands:
```json
"command": "summon minecraft:lightning_bolt {entity_x} {entity_y} {entity_z}"  // Strike lightning
"command": "give {player} minecraft:diamond{display:{Name:'{\"text\":\"Reward\"}'}}"  // Give named item
```

7. Player Commands
----------------
The mod provides several commands to control events and settings:

A. Managing Events:
- /lootdrops event <eventName> true    - Enable an event
- /lootdrops event <eventName> false   - Disable an event
- /lootdrops event dropchance true     - Enable 2x drop chance bonus
- /lootdrops event dropchance false    - Disable drop chance bonus

- /lootdrops event doubledrops true     - Enable 2x item drops bonus
- /lootdrops event doubledrops false    - Disable item drop bonus

B. Information Commands:
- /lootdrops list                      - List all active events
- /lootdrops reload                    - Reload all configuration files
- /lootdrops help                      - Show command help

C. Examples:
- /lootdrops event winter true         - Enable winter event drops
- /lootdrops event halloween false     - Disable halloween event drops
- /lootdrops event mycustomevent true  - Enable a custom event

D. Permissions:
- entitylootdrops.command.event       - Permission to enable/disable events
- entitylootdrops.command.list        - Permission to list active events
- entitylootdrops.command.reload      - Permission to reload configurations
- entitylootdrops.command.admin       - Permission for all commands

8. Events System
-------------
- Events are special drop configurations that can be toggled on/off
- Multiple events can be active simultaneously
- Event drops stack with normal drops
- Custom events can be created by adding new folders in the events directory
- The drop chance event doubles all drop chances when active
- The double drops event doubles all item drops when active

9. Customizing Event Messages
----------------------------
- You can customize the broadcast messages that appear when events are enabled or disabled
- 1. Edit the `messages.json` file in the config/entitylootdrops directory
- 2. Customize messages for built-in events or add messages for your custom events
- 3. Use color codes with § symbol (e.g., §a for green, §c for red, §6 for gold)
- 4. Changes take effect after reloading the configuration (/lootdrops reload)

10. Tips and Best Practices
-----------------------
1. Start with small drop chances (1-5%) for valuable items
2. Use commands sparingly to avoid spam
3. Test configurations on a test server first
4. Back up your config files before making major changes
5. Use meaningful comments in your JSON files
6. Keep drop chances balanced for game progression

7. You can delete most of the default example generated files, but keep the hostile_drops.json file

11. Common Issues
-------------
1. Invalid JSON: Check your syntax, especially with NBT data
2. Missing Quotes: All strings need double quotes
3. Wrong IDs: Verify Minecraft IDs are correct (include "minecraft:" prefix)
4. Command Errors: Test commands in-game first
5. Case Sensitivity: IDs and commands are case-sensitive

