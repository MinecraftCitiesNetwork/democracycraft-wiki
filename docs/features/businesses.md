# Businesses

DemocracyBusiness is a trading plugin that enables players to establish their businesses, hire other players, and set wages. Employees can complete jobs for businesses and generate revenue by producing items for chest shops.

![image](https://i.imgur.com/xEMORwN.png)

## Note

This plugin uses the command `/democracybusiness` officially, but alternatives are available for ease of access. Use whichever you like:
- `/democracybusiness`
- `/db`
- `/business`
- `/firm`
- `/company`

After creating a company, most commands are available via a GUI in `/democracybusiness menu <business>`.

## Starting a Company

To create a business, players must obtain the Entrepreneur qualification at the university, register their business with the government, and secure approval from the Department of Commerce [here](https://www.democracycraft.net/business-portal/).

- `/democracybusiness create <businessname>` to create a business.
- `/democracybusiness deposit <businessname> <amount>` or `/democracybusiness withdraw <businessname> <amount>` to manage business funds.
- `/democracybusiness pay <businessname> <user> <amount>` to pay employees.
- `/democracybusiness disband <businessname>` to disband a business.
- `/democracybusiness list <user>`, `/democracybusiness info <businessname>`, and `/democracybusiness list all <page>` to view firm details.

## Managing Employees

To hire another player for your business:
- `/democracybusiness offer <business> <user>` to offer a job.
- `/democracybusiness accept <business>` or `/democracybusiness deny <business>` for the other player to accept or deny the offer.
- `/democracybusiness staff list <business>` to view staff and their ranks.
- Promote, demote, or fire employees using relevant commands.
- `/democracybusiness resign <business>` to resign as an employee.
- `/democracybusiness transferproprietorship <business><user>` to transfer proprietorship.

## Types of Employees

Available roles in a business hierarchy:
Proprietor - Complete permissions and control
Co-Proprietor - Shares unlimited access with proprietor (including management of funds and management of employees)
Manager - Able to access all financial information
Supervisor - Able to access firm ChestShops
Employee - Simply hired with no special permissions

Custom roles can be created and edited with specific permissions. Permissions include Administrator, Financial, ChestShop, and Default.

## Balance Tracking

Track a business's balance and transactions using `/democracybusiness transactions <business> <page>`.

## Chest Shop Integration

Players can create chest shops under a company's name. Add `b:<businessname>` to the first line of the chest shop sign to log sales accordingly.
- `/csn history b:<business>` to view chest shop history.
- `/business sales <business> <page>` to access sales history.
